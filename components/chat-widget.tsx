'use client';

import dynamic from 'next/dynamic';

// Dynamically import the client component with no SSR
const ChatWidgetClient = dynamic(() => import('./chat-widget-client'), {
  ssr: false,
  loading: () => null
});

export default function ChatWidget() {
  return <ChatWidgetClient />;
}
