import {HttpHeaders, HttpInterceptorFn} from '@angular/common/http';
import {environment} from "../../../environments/environment";
import {User} from "../models/User";

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  let httpHeaders = new HttpHeaders();

  httpHeaders = httpHeaders.append('X-API-Key', environment.backend_api_key);

  let jwtToken = localStorage.getItem('jwtToken');
  let user = JSON.parse(localStorage.getItem('userdetails')!);

  if (jwtToken) {
    httpHeaders = httpHeaders.append('Authorization', `Bearer ${jwtToken}`);
  } else if (user && user.username) {
    httpHeaders = httpHeaders.append('Authorization', 'Basic ' + window.btoa(user.username + ':' + user.password));
    localStorage.removeItem('userdetails');
  }

  const modifiedReq = req.clone({
    headers: httpHeaders
  });
  console.log(httpHeaders);
  return next(modifiedReq);
};
