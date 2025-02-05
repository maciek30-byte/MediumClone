import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterLink } from '@angular/router'
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { Store } from '@ngrx/store'
import { register } from '../../store/auth.actions'
import { RegisterRequest } from '../../types/types'
import { AppState } from '../../../types'
import { selectIsSubmitted } from '../../store/auth.reducer'
import { AuthService } from '../../auth.service'

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
  private authService = inject(AuthService)

  isSubmitted$ = this.store.select(selectIsSubmitted)

  registerForm = this.formBuilder.group({
    username: this.formBuilder.nonNullable.control('', Validators.required),
    email: this.formBuilder.nonNullable.control('', Validators.required),
    password: this.formBuilder.nonNullable.control('', Validators.required),
  })

  onSubmit() {
    if (this.registerForm.getRawValue()) {
      const request: RegisterRequest = {
        user: this.registerForm.getRawValue(),
      }

      this.store.dispatch(register({ request: request }))
      this.authService.register(request)
    }
  }
}

//@TODO Different place form form declaration, on the component should be only instatniate, or call//
//@TODO Add form validation//
