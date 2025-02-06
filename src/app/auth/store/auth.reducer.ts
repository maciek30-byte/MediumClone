import { createFeature, createReducer, on } from '@ngrx/store'
import { AuthState } from '../types/types'
import { authActions } from './auth.actions'
import { routerNavigatedAction } from '@ngrx/router-store'

const INITIAL_AUTH_STATE: AuthState = {
  isSubmitted: false,
  currentUser: undefined,
  validationErrors: null,
}

const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    INITIAL_AUTH_STATE,
    on(routerNavigatedAction, (state) => ({
      ...state,
      validationErrors: null,
    })),

    on(authActions.register, (state) => ({
      ...state,
      isSubmitted: true,
      currentUser: undefined,
      validationErrors: null,
    })),

    on(authActions.registerFailure, (state, { errors }) => ({
      ...state,
      isSubmitted: false,
      validationErrors: errors,
    })),

    on(authActions.registerSuccess, (state, { currentUser }) => ({
      ...state,
      isSubmitted: false,
      user: currentUser,
    })),

    on(authActions.login, (state) => ({
      ...state,
      isSubmitted: true,
      currentUser: undefined,
      validationErrors: null,
    })),

    on(authActions.loginFailure, (state, { errors }) => ({
      ...state,
      isSubmitted: false,
      validationErrors: errors,
    })),

    on(authActions.loginSuccess, (state, { currentUser }) => ({
      ...state,
      isSubmitted: false,
      user: currentUser,
    }))
  ),
})

export const {
  name: authFeatureKey,
  reducer: authReducer,
  selectIsSubmitted,
  selectValidationErrors,
} = authFeature

//@TODO the same situation with a lot of boilerplate//
