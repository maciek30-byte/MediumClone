import { AuthState } from './auth/types/types';

export interface AppState {
  auth: AuthState;
}

//@TODO introduce generic type which is contain public Api wrapper to remove nested interface repetition//