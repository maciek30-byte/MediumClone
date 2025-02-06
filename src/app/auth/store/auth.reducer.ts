import { createFeature, createReducer, on } from '@ngrx/store';
import { AuthState } from '../types/types';
import { authActions} from './auth.actions';

const INITIAL_AUTH_STATE: AuthState = {
  isSubmitted: false,
  currentUser: undefined,
  validationErrors: null

};

const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    INITIAL_AUTH_STATE,
    on(authActions.register, (state) => ({
      ...state,
      isSubmitted: true,
      currentUser: undefined,
      validationErrors: null
    })),

    on(authActions.registerFailure, (state, {errors}) => ({
      ...state,
      isSubmitted: false,
      validationErrors: errors
    })),

    on(authActions.registerSuccess, (state, {currentUser}) => ({
      ...state,
      isSubmitted: false,
      user: currentUser,
    }))
  ),
});

export const { name: authFeatureKey, reducer: authReducer, selectIsSubmitted, selectCurrentUser, selectValidationErrors } = authFeature;
