import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { Token } from '../interfaces/token';
import { UserService } from '../services/user.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private us: UserService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request)
    if (request.url != 'http://localhost:8080/ws/token') {
      let tokens: Token = JSON.parse(localStorage.getItem('tokens') ?? "")
      if (this.us.isExpiredToken(tokens.accessToken!)) {
        // il faut regénérer les tokens à partir de refreshToken
        this.us.generateTokensFromRefreshToken(tokens.refreshToken!).subscribe({
          next: res => {
            tokens = res
            localStorage.setItem("tokens", JSON.stringify(res))
            request = request.clone({
              setHeaders: {
                'Authorization': 'Bearer ' + tokens.accessToken
              }
            })
            return next.handle(request);
          },
          error: erreur => {
            localStorage.removeItem('tokens')
            return EMPTY
          }
        }
        )
      }

      request = request.clone({
        setHeaders: {
          'Authorization': 'Bearer ' + tokens.accessToken
        }
      })
    }
    return next.handle(request);
  }
}
