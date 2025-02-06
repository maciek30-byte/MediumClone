import { CurrentUser } from '../../../shared/models/User'
import { ErrorMessages } from '../../../shared/models/ErrorMessages'

interface UserWrapper<T> {
  user: T
}

interface RegisterRequestBase {
  email: string
  password: string
  username: string
}

type LoginRequestBase = Omit<RegisterRequestBase, 'username'>

export type LoginRequest = UserWrapper<LoginRequestBase>

export type RegisterRequest = UserWrapper<RegisterRequestBase>

export type AuthResponse = UserWrapper<CurrentUser>

export interface AuthState {
  isSubmitted: boolean
  currentUser: CurrentUser | undefined | null
  validationErrors: ErrorMessages | null
}

//@TODO for now we need null and undefined to get difference between initial state without started auth request, and undefined when our request is failed//
