import { Component, Input } from '@angular/core'
import { ErrorMessages } from '../../models/ErrorMessages'

@Component({
  selector: 'app-error-message',
  imports: [],
  templateUrl: './error-message.component.html',
})
export class ErrorMessageComponent {
  //@TODO remove [] <<<<<< from this type//
  @Input() errorsMessages: ErrorMessages[] = []
}

//@FIXME this is draft not ready for use , need to think about this structure//