import {HttpHeaders, HttpInterceptorFn} from '@angular/common/http';
import {environment} from "../../../environments/environment";

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  let httpHeaders = new HttpHeaders();

  httpHeaders = httpHeaders.append('X-API-Key', environment.backend_api_key);

  let jwtToken = localStorage.getItem('jwtToken');
  if (jwtToken) {
    httpHeaders = httpHeaders.append('Authorization', `Bearer ${jwtToken}`);
  }

  const modifiedReq = req.clone({
    headers: httpHeaders
  });
  return next(modifiedReq);
};
