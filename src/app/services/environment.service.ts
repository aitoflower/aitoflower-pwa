import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type AppEnv = 'LOCAL' | 'PREVIEW' | 'PROD';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {private readonly env: AppEnv;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      const host = window.location.hostname;

      if (host === 'localhost' || host === '127.0.0.1') {
        this.env = 'LOCAL';
      } else if (host.includes('--') && (host.endsWith('.web.app') || host.endsWith('.firebaseapp.com'))) {
        this.env = 'PREVIEW';
      } else {
        this.env = 'PROD';
      }
    } else {
      // Valor por defecto para SSR (Server Side Rendering) si alguna vez lo usamos
      this.env = 'PROD';
    }
  }

  get currentEnv(): AppEnv {
    return this.env;
  }

  isProduction(): boolean {
    return this.env === 'PROD';
  }

  isPreview(): boolean {
    return this.env === 'PREVIEW';
  }
}
