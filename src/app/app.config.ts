import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { authInterceptor } from './application/interceptors/auth.interceptor';
import { GoogleLoginProvider, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('399326642523-j2ucknkcani6so16v42rjitc4ibmn2l5.apps.googleusercontent.com')
          }
        ],
        onError: (err: any) => {
          console.error(err);

        }
      } as SocialAuthServiceConfig,
    },
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([authInterceptor])
    ), provideAnimationsAsync(), provideAnimationsAsync()
  ]
};
