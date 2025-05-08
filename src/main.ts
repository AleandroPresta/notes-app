import { bootstrapApplication } from '@angular/platform-browser';
import * as Sentry from '@sentry/angular';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, inject } from '@angular/core';

import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Create a mock localStorage for SSR environments
if (typeof window === 'undefined') {
    const mockLocalStorage = {
        getItem: () => null,
        setItem: () => null,
        removeItem: () => null,
        clear: () => null,
        key: () => null,
        length: 0,
    };

    // @ts-ignore - Add global mock for SSR
    global.localStorage = mockLocalStorage;
}

Sentry.init({
    dsn: 'https://2fa6ddeddbc1606ee5004d199f73d8df@o4509287929872384.ingest.de.sentry.io/4509287931183184',
    // Setting this option to true will send default PII data to Sentry.
    // For example, automatic IP address collection on events
    sendDefaultPii: true,
    // Only initialize in browser environments
    enabled: typeof window !== 'undefined',
});

bootstrapApplication(AppComponent, appConfig).catch((err) =>
    console.error(err)
);
