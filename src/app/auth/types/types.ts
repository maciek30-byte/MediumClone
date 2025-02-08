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
  isLoading: boolean
  currentUser: CurrentUser | undefined | null
  validationErrors: ErrorMessages | null
}

//@TODO for now we need null and undefined  undefined means that authorisation is not started, and null, that authorisation is finished, but do not find a user so it is not authorised//
