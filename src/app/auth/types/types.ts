import { CurrentUser } from '../../../shared/models/User';

export interface RegisterRequest {
  user: {
    email: string;
    password: string;
    username: string;
  };
}

export interface AuthState {
  isSubmitted: boolean;
}

export interface AuthResponse {
  user: CurrentUser;
}
