import {HttpHeaders, HttpInterceptorFn} from '@angular/common/http';
import {environment} from "../../../environments/environment";
import {AuthService} from "../services/auth.service";
import {inject} from "@angular/core";

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const authService = inject(AuthService);

  let httpHeaders = new HttpHeaders();

  httpHeaders = httpHeaders.append('X-API-Key', environment.backend_api_key);

  let jwtToken = authService.accessStorage().getItem('jwtToken');
  let user = JSON.parse(authService.accessStorage().getItem('userdetails')!);

  if (jwtToken) {
    httpHeaders = httpHeaders.append('Authorization', `Bearer ${jwtToken}`);
  } else if (user && user.username) {

    let encoder = new TextEncoder();
    let utf8Password = encoder.encode(user.password);
    let passwordString = String.fromCharCode.apply(null, Array.from(utf8Password));
    httpHeaders = httpHeaders.append('Authorization', 'Basic ' + window.btoa(user.username + ':' + passwordString));

    authService.accessStorage().removeItem('userdetails');
  }
  const modifiedReq = req.clone({
    headers: httpHeaders
  });

  return next(modifiedReq);
};
