import {HttpHeaders, HttpInterceptorFn} from '@angular/common/http';
import {environment} from "../../../environments/environment";

export const apikeyInterceptor: HttpInterceptorFn = (req, next) => {

  let httpHeaders = new HttpHeaders();

  httpHeaders = httpHeaders.append('X-API-Key', environment.backend_api_key);

  const modifiedReq = req.clone({
    headers: httpHeaders
  });
  return next(modifiedReq);
};
