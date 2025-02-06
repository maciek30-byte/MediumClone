import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterLink } from '@angular/router'
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { Store } from '@ngrx/store'
import { authActions } from '../../store/auth.actions'
import { RegisterRequest } from '../../types/types'
import { selectIsSubmitted, selectValidationErrors } from '../../store/auth.reducer';

@Component({
  selector: 'app-register',
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
  private formBuilder = inject(FormBuilder)
  private store = inject(Store)

  isSubmitted$ = this.store.select(selectIsSubmitted)
  errorMessage$ = this.store.select(selectValidationErrors)

  registerForm = this.formBuilder.group({
    username: this.formBuilder.nonNullable.control('', Validators.required),
    email: this.formBuilder.nonNullable.control('', Validators.required),
    password: this.formBuilder.nonNullable.control('', Validators.required),
  })

  onSubmit() {
    const request: RegisterRequest = {
      user: this.registerForm.getRawValue(),
    }

    this.store.dispatch(authActions.register({ request: request }))
  }
}

//@TODO Different place form form declaration, on the component should be only instatniate, or call//
//@TODO Add form validation//
