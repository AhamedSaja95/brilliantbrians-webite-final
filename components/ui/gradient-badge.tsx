import React from 'react';
import { LucideIcon } from 'lucide-react';

interface GradientBadgeProps {
  text: string;
  icon?: LucideIcon;
  variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'expert';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  animated?: boolean;
  glow?: boolean;
  pulse?: boolean;
  shimmer?: boolean;
}

const GradientBadge: React.FC<GradientBadgeProps> = ({
  text,
  icon: Icon,
  variant = 'primary',
  size = 'md',
  className = '',
  animated = true,
  glow = false,
  pulse = false,
  shimmer = false
}) => {
  const variants = {
    primary: {
      background: 'bg-[#2151A1]',
      text: 'text-white',
      border: 'border-[#2151A1]/30',
      shadow: 'shadow-[0_4px_20px_rgba(0,51,102,0.3)]',
      glow: 'shadow-[0_0_30px_rgba(0,51,102,0.5)]'
    },
    secondary: {
      background: 'bg-[#d93b3b]',
      text: 'text-white',
      border: 'border-[#d93b3b]/30',
      shadow: 'shadow-[0_4px_20px_rgba(217,59,59,0.3)]',
      glow: 'shadow-[0_0_30px_rgba(217,59,59,0.5)]'
    },
    accent: {
      background: 'bg-[#2151A1]',
      text: 'text-white',
      border: 'border-[#d93b3b]',
      shadow: 'shadow-[0_4px_20px_rgba(0,51,102,0.3)]',
      glow: 'shadow-[0_0_30px_rgba(0,51,102,0.4)]'
    },
    success: {
      background: 'bg-emerald-600',
      text: 'text-white',
      border: 'border-emerald-500/30',
      shadow: 'shadow-[0_4px_20px_rgba(16,185,129,0.3)]',
      glow: 'shadow-[0_0_30px_rgba(16,185,129,0.5)]'
    },
    warning: {
      background: 'bg-amber-500',
      text: 'text-white',
      border: 'border-amber-500/30',
      shadow: 'shadow-[0_4px_20px_rgba(245,158,11,0.3)]',
      glow: 'shadow-[0_0_30px_rgba(245,158,11,0.5)]'
    },
    expert: {
      background: 'bg-purple-600',
      text: 'text-white',
      border: 'border-purple-600/30',
      shadow: 'shadow-[0_4px_20px_rgba(147,51,234,0.3)]',
      glow: 'shadow-[0_0_30px_rgba(147,51,234,0.5)]'
    }
  };

  const sizes = {
    sm: {
      container: 'px-3 py-1.5 text-xs',
      icon: 'w-3 h-3',
      gap: 'gap-1'
    },
    md: {
      container: 'px-4 py-2 text-sm',
      icon: 'w-4 h-4',
      gap: 'gap-2'
    },
    lg: {
      container: 'px-6 py-3 text-base',
      icon: 'w-5 h-5',
      gap: 'gap-2'
    }
  };

  const currentVariant = variants[variant];
  const currentSize = sizes[size];

  return (
    <div className={`
      inline-flex items-center gap-2
      bg-gradient-to-r from-[#2151A1]/10 to-[#d93b3b]/10
      text-[#2151A1]
      ${currentSize.container}
      rounded-full
      font-semibold
      border border-[#2151A1]/10
      shadow-lg
      backdrop-blur-sm
      hover:shadow-xl
      transition-all duration-300
      group
      overflow-hidden
      relative
      ${glow ? currentVariant.glow : ''}
      ${pulse ? 'animate-pulse' : ''}
      ${className}
    `}>
      {/* Enhanced shimmer effect */}
      {shimmer && (
        <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
      )}

      {/* Enhanced background animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2151A1]/5 via-[#d93b3b]/5 to-[#2151A1]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

      {/* Content */}
      <div className="relative z-10 flex items-center gap-2">
        {Icon && (
          <Icon className={`
            ${currentSize.icon}
            ${animated ? 'group-hover:rotate-12 transition-transform duration-300' : ''}
          `} />
        )}
        <span className="bg-gradient-to-r from-[#2151A1] to-[#d93b3b] bg-clip-text text-transparent font-bold">
          {text}
        </span>
      </div>

      {/* Enhanced pulse ring effect */}
      {pulse && (
        <div className="absolute inset-0 rounded-full border-2 border-[#d93b3b]/30 animate-ping" />
      )}
    </div>
  );
};

export default GradientBadge;
