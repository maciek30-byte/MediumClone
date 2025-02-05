import { createFeature, createReducer, on } from '@ngrx/store';
import { AuthState } from '../types/types';
import { authActions} from './auth.actions';

const INITIAL_AUTH_STATE: AuthState = {
  isSubmitted: false,
};

const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    INITIAL_AUTH_STATE,
    on(authActions.register, (state) => ({
      ...state,
      isSubmitted: true,
    }))
  ),
});

export const { name: authFeatureKey, reducer: authReducer, selectIsSubmitted } = authFeature;
