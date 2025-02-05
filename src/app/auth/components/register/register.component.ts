import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { register } from '../../store/auth.actions';
import { RegisterRequest } from '../../types/types';

@Component({
  selector: 'app-register',
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
  formBuilder = inject(FormBuilder);
  store = inject(Store);

  registerForm = this.formBuilder.group({
    username: this.formBuilder.nonNullable.control('', Validators.required),
    email: this.formBuilder.nonNullable.control('', Validators.required),
    password: this.formBuilder.nonNullable.control('', Validators.required),
  });

  onSubmit() {
    if (this.registerForm.getRawValue()) {
      const request: RegisterRequest = {
        user: this.registerForm.getRawValue(),
      };
      this.store.dispatch(register({ request: request }));
    }
  }
}

//@TODO Different place form form declaration, on the component should be only instantiate, or call//
