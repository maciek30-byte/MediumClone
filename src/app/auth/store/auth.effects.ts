import { Actions, createEffect, ofType } from '@ngrx/effects'
import { inject } from '@angular/core'
import { AuthService } from '../auth.service'
import { catchError, map, of, switchMap, tap } from 'rxjs'
import { authActions } from './auth.actions'
import { CurrentUser } from '../../../shared/models/User'
import { HttpErrorResponse } from '@angular/common/http'
import { PersistenceService } from '../../../shared/services/persistanteService/persistence.service'
import { Router } from '@angular/router'

export const registerEffects = createEffect(
  (
    actions$ = inject(Actions),
    authService = inject(AuthService),
    persistenceService = inject(PersistenceService)
  ) => {
    return actions$.pipe(
      ofType(authActions.register),
      switchMap(({ request }) => {
        return authService.register(request).pipe(
          map((currentUser: CurrentUser) => {
            persistenceService.set('token', currentUser.token)
            return authActions.registerSuccess({ currentUser })
          }),
          catchError((errorResponse: HttpErrorResponse) =>
            of(
              authActions.registerFailure({
                errors: errorResponse.error.errors,
              })
            )
          )
        )
      })
    )
  },
  { functional: true }
)

export const redirectEffect = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(authActions.registerSuccess),
      tap(() => router.navigateByUrl('/'))
    )
  },
  { functional: true, dispatch: false }
)
