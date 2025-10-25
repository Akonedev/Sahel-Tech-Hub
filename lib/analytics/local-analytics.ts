// Analytics 100% local - Stockage dans le navigateur
export class LocalAnalytics {
  private static instance: LocalAnalytics;
  private sessionId: string;

  private constructor() {
    this.sessionId = this.generateSessionId();
    this.initSession();
  }

  static getInstance(): LocalAnalytics {
    if (!LocalAnalytics.instance) {
      LocalAnalytics.instance = new LocalAnalytics();
    }
    return LocalAnalytics.instance;
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private initSession() {
    if (typeof window === 'undefined') return;
    
    const session = {
      id: this.sessionId,
      startTime: new Date().toISOString(),
      userAgent: navigator.userAgent,
      language: navigator.language,
      screenResolution: `${window.screen.width}x${window.screen.height}`,
    };

    console.log('📊 Session Analytics:', session);
  }

  trackPageView(path: string) {
    if (typeof window === 'undefined') return;

    const pageView = {
      type: 'pageview',
      path,
      timestamp: new Date().toISOString(),
      sessionId: this.sessionId,
      referrer: document.referrer,
    };

    // Sauvegarder dans localStorage
    this.saveEvent(pageView);
    console.log('👁️ Page vue:', path);
  }

  trackEvent(eventName: string, data?: Record<string, any>) {
    if (typeof window === 'undefined') return;

    const event = {
      type: 'event',
      name: eventName,
      data,
      timestamp: new Date().toISOString(),
      sessionId: this.sessionId,
    };

    this.saveEvent(event);
    console.log('🎯 Événement:', eventName, data);
  }

  private saveEvent(event: any) {
    if (typeof window === 'undefined') return;

    try {
      const key = `analytics_${new Date().toISOString().split('T')[0]}`;
      const stored = localStorage.getItem(key);
      const events = stored ? JSON.parse(stored) : [];
      
      events.push(event);
      
      // Garder max 100 événements par jour
      if (events.length > 100) {
        events.shift();
      }
      
      localStorage.setItem(key, JSON.stringify(events));
    } catch (error) {
      console.error('Erreur sauvegarde analytics:', error);
    }
  }

  getStats() {
    if (typeof window === 'undefined') return null;

    try {
      const today = new Date().toISOString().split('T')[0];
      const key = `analytics_${today}`;
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      return [];
    }
  }

  clearOldData(daysToKeep = 7) {
    if (typeof window === 'undefined') return;

    const keys = Object.keys(localStorage).filter(key => key.startsWith('analytics_'));
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - daysToKeep);

    keys.forEach(key => {
      const dateStr = key.replace('analytics_', '');
      const keyDate = new Date(dateStr);
      
      if (keyDate < cutoffDate) {
        localStorage.removeItem(key);
      }
    });
  }
}

export const analytics = typeof window !== 'undefined' ? LocalAnalytics.getInstance() : null;
