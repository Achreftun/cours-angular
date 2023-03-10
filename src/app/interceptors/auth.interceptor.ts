import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { UserService } from '../services/user.service';
import { CommunicateService } from '../services/communicate.service';
import { Router } from '@angular/router';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private userService: UserService, 
    private router: Router) { }
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request.context);

    if (request.url != 'http://localhost:8080/ws/token') {
      let tokens = JSON.parse(localStorage.getItem('tokens') ?? "")

      if (this.userService.isExpiredToken(tokens.accessToken)) {
        this.userService.generateTokensFromRefreshToken(tokens.refreshToken).subscribe(res => {
          tokens = res;
          localStorage.setItem('tokens', JSON.stringify(res))
          this.router.navigateByUrl(request.url)
        })
      }
      request = request.clone({
        setHeaders: {
          'Authorization': 'Bearer ' + tokens.accessToken
        }
      })

    }

    console.log("envoi")
    return next.handle(request);
  }
}