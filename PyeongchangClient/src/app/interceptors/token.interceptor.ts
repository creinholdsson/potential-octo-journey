import { Injectable, Injector, Inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { AuthenticationService } from '../services/authentication-service.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    auth: AuthenticationService;

  constructor(private inj: Injector) {
      
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.auth = this.inj.get(AuthenticationService);
    var token = this.auth.getToken();
    if(token != null) {
        request = request.clone({
        setHeaders: {
            Authorization: `Bearer ${token}`
        }
        });
    }

    return next.handle(request);
  }
}