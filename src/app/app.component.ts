import { Component, inject, OnInit } from '@angular/core'
import { RouterModule } from '@angular/router'
import { TopBarComponent } from '../shared/components/top-bar/top-bar.component'
import { Store } from '@ngrx/store'
import { AppState } from './types'
import { authActions } from './auth/store/auth.actions'

@Component({
  imports: [RouterModule, TopBarComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
})
export class AppComponent implements OnInit {
  private readonly store = inject<Store<AppState>>(Store)
  title = 'MediumClone'

  ngOnInit(): void {
    this.store.dispatch(authActions.getCurrentUser())
  }
}
