import { createFeature, createReducer, on } from '@ngrx/store'
import { AuthState } from '../types/types'
import { authActions } from './auth.actions'
import { routerNavigatedAction } from '@ngrx/router-store'

const INITIAL_AUTH_STATE: AuthState = {
  isSubmitted: false,
  isLoading: false,
  currentUser: null,
  validationErrors: null,
}

const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    INITIAL_AUTH_STATE,
    on(routerNavigatedAction, (state): AuthState => ({
      ...state,
      validationErrors: null,
    })),

    on(authActions.register, (state): AuthState => ({
      ...state,
      isSubmitted: true,
      currentUser: undefined,
      validationErrors: null,
    })),
    on(authActions.registerFailure, (state, { errors }): AuthState => ({
      ...state,
      isSubmitted: false,
      validationErrors: errors,
    })),
    on(authActions.registerSuccess, (state, { currentUser }): AuthState => ({
      ...state,
      isSubmitted: false,
      currentUser,
    })),

    on(authActions.login, (state): AuthState => ({
      ...state,
      isSubmitted: true,
      currentUser: undefined,
      validationErrors: null,
    })),
    on(authActions.loginFailure, (state, { errors }): AuthState => ({
      ...state,
      isSubmitted: false,
      validationErrors: errors,
    })),
    on(authActions.loginSuccess, (state, { currentUser }):AuthState  => ({
      ...state,
      isSubmitted: false,
      currentUser,
    })),

    on(authActions.getCurrentUser, (state): AuthState => ({
      ...state,
      currentUser: undefined,
      isLoading: true,
    })),
    on(authActions.getCurrentUserFailed, (state): AuthState => ({
      ...state,
      isLoading: false,
      currentUser: null,
    })),
    on(authActions.loginSuccess, (state, { currentUser }):AuthState  => ({
      ...state,
      isLoading: false,
      currentUser,
    })),
  ),
})

export const {
  name: authFeatureKey,
  reducer: authReducer,
  selectIsSubmitted,
  selectValidationErrors,
  selectCurrentUser,
} = authFeature

//@TODO the same situation with a lot of boilerplate//
