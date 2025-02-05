import { Actions, createEffect, ofType } from '@ngrx/effects'
import { inject } from '@angular/core'
import { AuthService } from '../auth.service'
import { catchError, map, of, switchMap } from 'rxjs'
import { authActions } from './auth.actions'
import { CurrentUser } from '../../../shared/models/User'

export const registerEffects = createEffect(
  (actions$ = inject(Actions), authService = inject(AuthService)) => {
    return actions$.pipe(
      ofType(authActions.register),
      switchMap(({ request }) => {
        return authService.register(request).pipe(
          map((currentUser: CurrentUser) => {
            return authActions.registerSuccess({ currentUser })
          }),
          catchError((err) => of(authActions.registerFailure(err)))
        )
      })
    )
  },
  { functional: true }
)
