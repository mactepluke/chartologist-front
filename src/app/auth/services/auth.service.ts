import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {JwtHelperService} from "@auth0/angular-jwt";
import moment from 'moment';
import {User} from "../models/User";
import {BehaviorSubject, Observable, tap} from "rxjs";
import {environment} from "../../../environments/environment";
import {shareReplay} from "rxjs/operators";

@Injectable()
export class AuthService {
  private readonly isLoggedInSubject: BehaviorSubject<boolean>

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService
  ) {
    this.isLoggedInSubject = new BehaviorSubject<boolean>(this.isLoggedIn());
  }
  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${environment.backend_address}/user/create`,
      {
        "username": `${user.username}`,
        "password": `${user.password}`
      });
  }

  login(user: User): Observable<HttpResponse<User>> {

    localStorage.setItem("userdetails", JSON.stringify(user));

    return this.http.get<User>(`${environment.backend_address}/user/login`, {
      observe: 'response', withCredentials: true
    }).pipe(
      tap((res ) => {
          const jwtToken = res.headers.get('Authorization');
          if (jwtToken) {
            this.setSession(jwtToken);
          }
        }
      ),
      shareReplay()
    );
  }

  private setSession(jwtToken: string) {

    const decodedToken = this.jwtHelper.decodeToken(jwtToken);

    localStorage.setItem('jwtToken', jwtToken);
    localStorage.setItem('username', decodedToken.sub)
    localStorage.setItem('expires_at', JSON.stringify(decodedToken.exp));

    this.updateIsLoggedInSubject();
  }

  logout(): void {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('username');

    this.updateIsLoggedInSubject();
  }

  private updateIsLoggedInSubject() : void {
    this.isLoggedInSubject.next(this.isLoggedIn());
  }

  isLoggedIn(): boolean {
    return moment().isBefore(this.getExpiration());
  }

  getExpiration(): moment.Moment {
    const expiration: string | null = localStorage.getItem('expires_at');
    const expiresAt = expiration === null ? 0 : JSON.parse(expiration);
    return moment(expiresAt * 1000);
  }

  getUsername(): string {
    let username = localStorage.getItem('username');
    return username === null ? '' : username;
  }

  getIsLoggedInSubject(): BehaviorSubject<boolean> {
    return this.isLoggedInSubject;
  }

}
