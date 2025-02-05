import { createAction, props } from '@ngrx/store';
import { RegisterRequest } from '../types/types';

export const register = createAction(
  '[Auth] register', props<{request: RegisterRequest}>()
)