import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideStore } from '@ngrx/store';
import { AuthEffects } from './State/Effects/auth.effects';
import { authReducer } from './State/Reducers/auth.reducers';
// import { IncidentEffects } from './State/Effects/incident.effects';
// import { incidentReducer } from './State/Reducers/incident.reducers';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideEffects(AuthEffects), provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }), provideStore({auth: authReducer})]
};
