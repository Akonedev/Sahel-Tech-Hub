"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { analytics } from './local-analytics';

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    if (analytics) {
      analytics.trackPageView(pathname);
    }
  }, [pathname]);

  useEffect(() => {
    // Nettoyer les anciennes données tous les jours
    if (analytics) {
      analytics.clearOldData(7);
    }
  }, []);

  return <>{children}</>;
}
