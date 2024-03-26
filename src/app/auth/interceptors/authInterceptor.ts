import {HttpHeaders, HttpInterceptorFn} from '@angular/common/http';
import {environment} from "../../../environments/environment";

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  let httpHeaders = new HttpHeaders();

  httpHeaders = httpHeaders.append('X-API-Key', environment.backend_api_key);

  let jwtToken = localStorage.getItem('jwtToken');
  let user = JSON.parse(localStorage.getItem('userdetails')!);

  if (jwtToken) {
    httpHeaders = httpHeaders.append('Authorization', `Bearer ${jwtToken}`);
  } else if (user && user.username) {

    let encoder = new TextEncoder();
    let utf8Password = encoder.encode(user.password);
    let passwordString = String.fromCharCode.apply(null, Array.from(utf8Password));
    httpHeaders = httpHeaders.append('Authorization', 'Basic ' + window.btoa(user.username + ':' + passwordString));

    localStorage.removeItem('userdetails');
  }
  const modifiedReq = req.clone({
    headers: httpHeaders
  });

  return next(modifiedReq);
};
