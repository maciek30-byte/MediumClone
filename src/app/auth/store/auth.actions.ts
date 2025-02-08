import { createActionGroup, emptyProps, props } from '@ngrx/store'
import { LoginRequest, RegisterRequest } from '../types/types'
import { CurrentUser } from '../../../shared/models/User'
import { ErrorMessages } from '../../../shared/models/ErrorMessages'

export const authActions = createActionGroup({
  source: 'auth',
  events: {
    Register: props<{ request: RegisterRequest }>(),
    'Register Success': props<{ currentUser: CurrentUser }>(),
    'Register Failure': props<{ errors: ErrorMessages }>(),

    Login: props<{ request: LoginRequest }>(),
    'Login Success': props<{ currentUser: CurrentUser }>(),
    'Login Failure': props<{ errors: ErrorMessages }>(),

    getCurrentUser: emptyProps,
    'Get current user success': props<CurrentUser>(),
    'Get current user failed': emptyProps(),
  },
})
