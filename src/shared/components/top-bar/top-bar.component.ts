import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app/types';
import { selectCurrentUser } from '../../../app/auth/store/auth.reducer';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { tap } from 'rxjs';

@Component({
  selector: 'app-top-bar',
  imports: [RouterLink, AsyncPipe],
  templateUrl: './top-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopBarComponent {
  store = inject<Store<AppState>>(Store)

  currentUser$ = this.store.select(selectCurrentUser).pipe(
    tap(user => console.log('CurrentUser zmienił się:', user))
  );}


//@TODO create two separate component for LoggedUser and not Logged user and use it conditionaly