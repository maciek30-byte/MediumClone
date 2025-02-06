import { ApplicationConfig, isDevMode, provideZoneChangeDetection } from '@angular/core'
import { provideRouter } from '@angular/router'
import { appRoutes } from './app.routes'
import { provideState, provideStore } from '@ngrx/store'
import { provideStoreDevtools } from '@ngrx/store-devtools'
import { authFeatureKey, authReducer } from './auth/store/auth.reducer'
import { provideHttpClient } from '@angular/common/http'
import * as authEffects from './auth/store/auth.effects'
import { provideEffects } from '@ngrx/effects'
import { provideRouterStore, routerReducer } from '@ngrx/router-store'

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideStore({ router: routerReducer }),
    provideRouterStore(),
    provideEffects(authEffects),
    provideState(authFeatureKey, authReducer),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
    }),
  ],
}
