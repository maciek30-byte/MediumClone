import { CurrentUser } from '../../../shared/models/User'
import { ErrorMessages } from '../../../shared/models/ErrorMessages';

export interface RegisterRequest {
  user: {
    email: string
    password: string
    username: string
  }
}

export interface AuthState {
  isSubmitted: boolean
  currentUser: CurrentUser | undefined | null
  validationErrors: ErrorMessages | null
}

export interface AuthResponse {
  user: CurrentUser
}

//@TODO for now we need null and undefined to get difference between initial state without started auth request, and undefined when our request is failed//