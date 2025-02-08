import { HttpEvent, HttpInterceptorFn } from '@angular/common/http'
import { inject } from '@angular/core'
import { PersistenceService } from '../../shared/services/persistanteService/persistence.service'
import { Observable } from 'rxjs'

export const authInterceptor: HttpInterceptorFn = (
  req,
  next
): Observable<HttpEvent<unknown>> => {
  const persistenceService = inject(PersistenceService)

  const token = persistenceService.get('token')

  req = req.clone({
    setHeaders: {
      Authorization: token ? `Token ${token}` : '',
    },
  })

  return next(req)
}
