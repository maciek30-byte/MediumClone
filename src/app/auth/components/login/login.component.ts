import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterLink } from '@angular/router'
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { Store } from '@ngrx/store'
import { authActions } from '../../store/auth.actions'
import { LoginRequest } from '../../types/types'
import { selectIsSubmitted, selectValidationErrors } from '../../store/auth.reducer'
import { AppState } from '../../../types';

@Component({
  selector: 'app-login',
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  private formBuilder = inject(FormBuilder)
  private store = inject<Store<AppState>>(Store)

  isSubmitted$ = this.store.select(selectIsSubmitted)
  errorMessage$ = this.store.select(selectValidationErrors)

  loginForm = this.formBuilder.group({
    email: this.formBuilder.nonNullable.control('', Validators.required),
    password: this.formBuilder.nonNullable.control('', Validators.required),
  })

  onSubmit() {
    const request: LoginRequest = {
      user: this.loginForm.getRawValue(),
    }

    this.store.dispatch(authActions.login({ request: request }))
  }
}

//@TODO Different place form form declaration, on the component should be only instatniate, or call//
//@TODO Add form validation//
//@TODO for now it is a candidate to do it one shared component with registration components, wait for it for now because there are two separate business events//
