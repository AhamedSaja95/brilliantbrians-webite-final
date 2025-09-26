import { useEffect, useRef } from "react";

// Type declaration for performance.memory (non-standard API)
interface MemoryInfo {
  usedJSHeapSize: number;
  totalJSHeapSize: number;
  jsHeapSizeLimit: number;
}

interface PerformanceWithMemory extends Performance {
  memory?: MemoryInfo;
}

// Performance monitoring utilities for memory optimization
export interface PerformanceMetrics {
  usedJSHeapSize?: number;
  totalJSHeapSize?: number;
  jsHeapSizeLimit?: number;
  timestamp: number;
}

// Hook to monitor memory usage in development
export function useMemoryMonitor(componentName: string, interval = 10000) {
  const metricsRef = useRef<PerformanceMetrics[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Only run in development and if performance.memory is available
    if (process.env.NODE_ENV !== "development" || !("memory" in performance)) {
      return;
    }

    const collectMetrics = () => {
      const perf = performance as PerformanceWithMemory;
      const memory = perf.memory;
      if (memory) {
        const metrics: PerformanceMetrics = {
          usedJSHeapSize: memory.usedJSHeapSize,
          totalJSHeapSize: memory.totalJSHeapSize,
          jsHeapSizeLimit: memory.jsHeapSizeLimit,
          timestamp: Date.now(),
        };

        metricsRef.current.push(metrics);

        // Keep only last 10 measurements to prevent memory leak
        if (metricsRef.current.length > 10) {
          metricsRef.current = metricsRef.current.slice(-10);
        }

        // Log memory usage every 5 measurements
        if (metricsRef.current.length % 5 === 0) {
          const usedMB = (metrics.usedJSHeapSize! / 1024 / 1024).toFixed(2);
          const totalMB = (metrics.totalJSHeapSize! / 1024 / 1024).toFixed(2);
          console.log(`[${componentName}] Memory: ${usedMB}MB / ${totalMB}MB`);
        }
      }
    };

    // Collect initial metrics
    collectMetrics();

    // Set up interval for periodic collection
    intervalRef.current = setInterval(collectMetrics, interval);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [componentName, interval]);

  return metricsRef.current;
}

// Utility to detect memory leaks
export function detectMemoryLeak(
  beforeSize: number,
  afterSize: number,
  threshold = 50 * 1024 * 1024 // 50MB threshold
): boolean {
  const diff = afterSize - beforeSize;
  return diff > threshold;
}

// Debounce utility optimized for memory
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number,
  immediate = false
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  let lastArgs: Parameters<T> | undefined;
  let lastCallTime: number;
  let result: ReturnType<T> | undefined;

  const invokeFunc = () => {
    if (lastArgs) {
      result = func(...lastArgs) as ReturnType<T>;
      lastArgs = undefined;
    }
  };

  const leadingEdge = () => {
    timeout = null;
    if (!immediate) invokeFunc();
  };

  const remainingWait = (time: number) => {
    const timeSinceLastCall = time - lastCallTime;
    const timeWaiting = wait - timeSinceLastCall;
    return timeWaiting;
  };

  const shouldInvoke = (time: number) => {
    const timeSinceLastCall = time - lastCallTime;
    return !lastCallTime || timeSinceLastCall >= wait || timeSinceLastCall < 0;
  };

  const timerExpired = () => {
    const time = Date.now();
    if (shouldInvoke(time)) {
      return leadingEdge();
    }
    timeout = setTimeout(timerExpired, remainingWait(time));
  };

  const debounced = (...args: Parameters<T>) => {
    const time = Date.now();
    const isInvoking = shouldInvoke(time);

    lastArgs = args;
    lastCallTime = time;

    if (isInvoking) {
      if (!timeout) {
        if (immediate && lastArgs) {
          result = func(...lastArgs) as ReturnType<T>;
          lastArgs = undefined;
        }
        timeout = setTimeout(timerExpired, wait);
        return immediate ? result : undefined;
      }
    }
    if (!timeout) {
      timeout = setTimeout(timerExpired, wait);
    }
    return result;
  };

  debounced.clear = () => {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
    lastArgs = undefined;
  };

  debounced.flush = () => {
    if (timeout) {
      invokeFunc();
      clearTimeout(timeout);
      timeout = null;
    }
    return result;
  };

  return debounced;
}

// Throttle utility for high-frequency events
export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number,
  options: { leading?: boolean; trailing?: boolean } = {}
): (...args: Parameters<T>) => ReturnType<T> | undefined {
  let lastArgs: Parameters<T> | undefined;
  let result: ReturnType<T> | undefined;
  let timeout: NodeJS.Timeout | null = null;
  let previous = 0;

  const { leading = true, trailing = true } = options;

  const invokeFunc = () => {
    previous = leading === false ? 0 : Date.now();
    timeout = null;
    if (lastArgs) {
      result = func(...lastArgs) as ReturnType<T>;
      lastArgs = undefined;
    }
  };

  const throttled = (...args: Parameters<T>) => {
    const now = Date.now();
    if (!previous && leading === false) previous = now;
    const remaining = wait - (now - previous);
    lastArgs = args;

    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      if (lastArgs) {
        result = func(...lastArgs) as ReturnType<T>;
        lastArgs = undefined;
      }
    } else if (!timeout && trailing !== false) {
      timeout = setTimeout(invokeFunc, remaining);
    }
    return result;
  };

  throttled.cancel = () => {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
    previous = 0;
    lastArgs = undefined;
  };

  return throttled;
}

// Memory-friendly event listener manager
export class EventManager {
  private listeners = new Map<
    string,
    Array<{ element: Element; handler: EventListener }>
  >();

  add(
    element: Element,
    event: string,
    handler: EventListener,
    options?: AddEventListenerOptions
  ) {
    const key = `${event}`;
    if (!this.listeners.has(key)) {
      this.listeners.set(key, []);
    }

    this.listeners.get(key)!.push({ element, handler });
    element.addEventListener(event, handler, options);
  }

  remove(element: Element, event: string, handler: EventListener) {
    const key = `${event}`;
    const listeners = this.listeners.get(key);
    if (listeners) {
      const index = listeners.findIndex(
        (l) => l.element === element && l.handler === handler
      );
      if (index !== -1) {
        listeners.splice(index, 1);
        element.removeEventListener(event, handler);
      }
    }
  }

  cleanup() {
    this.listeners.forEach((listeners, event) => {
      listeners.forEach(({ element, handler }) => {
        element.removeEventListener(event, handler);
      });
    });
    this.listeners.clear();
  }
}
