import { createActionGroup, props } from '@ngrx/store'
import { RegisterRequest } from '../types/types'
import { CurrentUser } from '../../../shared/models/User'
import { ErrorMessages } from '../../../shared/models/ErrorMessages';

export const authActions = createActionGroup({
  source: 'auth',
  events: {
    Register: props<{ request: RegisterRequest }>(),
    'Register Success': props<{ currentUser: CurrentUser }>(),
    'Register Failure': props<{ errors: ErrorMessages }>(),
  },
})
