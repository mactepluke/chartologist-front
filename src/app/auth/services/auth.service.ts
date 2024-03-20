import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {JwtHelperService} from "@auth0/angular-jwt";
import moment from 'moment';
import {User} from "../models/User";
import {Observable, tap} from "rxjs";
import {environment} from "../../../environments/environment";
import {AuthResponse} from "../models/AuthResponse";
import {shareReplay} from "rxjs/operators";

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService
  ) {}

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${environment.backend_address}/user/create`,
      {
        "username": `${user.username}`,
        "password": `${user.password}`
      });
  }

  login(user: User): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${environment.backend_address}/user/login`,
      {
        "username": `${user.username}`,
        "password": `${user.password}`
      }).pipe(
      tap(res => this.setSession(res)),
      shareReplay()
    );
  }

  private setSession(authResponse: AuthResponse) {

    const token : string = authResponse.token;
    const decodedToken = this.jwtHelper.decodeToken(token);

    localStorage.setItem('jwtToken', token);
    localStorage.setItem('username', decodedToken.sub)
    localStorage.setItem('expires_at', JSON.stringify(decodedToken.exp));
  }

  logout() : void {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('username');
  }

  public isLoggedIn() : boolean {
    return moment().isBefore(this.getExpiration());
  }

  getExpiration() : moment.Moment {
    const expiration: string | null = localStorage.getItem('expires_at');
    const expiresAt = expiration === null ? 0 : JSON.parse(expiration);
    return moment(expiresAt * 1000);
  }

  getUsername(): string {
    let username = localStorage.getItem('username');
    return username === null ? '' : username;
  }

}
