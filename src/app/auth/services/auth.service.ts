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
  private storage: Storage = sessionStorage;

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

    this.cleanUpUserStorage();

    if (user.rememberMe) {
      this.useRememberMeStorage()
    }

    this.accessStorage().setItem("userdetails", JSON.stringify(user));

    return this.http.get<User>(`${environment.backend_address}/user/login`, {
      observe: 'response', withCredentials: true
    }).pipe(
      tap((res) => {
          const jwtToken = res.headers.get('Authorization');
          if (jwtToken) {
            this.setSession(jwtToken);
          }
        }
      ),
      shareReplay()
    );
  }

  cleanUpUserStorage() : void  {
    this.useRememberMeStorage();
    this.logout();
    this.resetToDefaultStorage();
    this.logout();
  }

  accessStorage(): Storage {
    return this.storage;
  }

  private resetToDefaultStorage(): void {
    this.storage = sessionStorage;
  }

  private useRememberMeStorage(): void {
    this.storage = localStorage;
  }

  private setSession(jwtToken: string) {

    const decodedToken = this.jwtHelper.decodeToken(jwtToken);

    this.accessStorage().setItem('jwtToken', jwtToken);
    this.accessStorage().setItem('username', decodedToken.sub)
    this.accessStorage().setItem('expires_at', JSON.stringify(decodedToken.exp));

    this.updateIsLoggedInSubject();
  }

  logout(): void {
    this.cleanUpStorage();
    this.updateIsLoggedInSubject();
    this.resetToDefaultStorage();
  }

  private cleanUpStorage(): void {
    this.accessStorage().removeItem('jwtToken');
    this.accessStorage().removeItem('expires_at');
    this.accessStorage().removeItem('username');
  }

  private updateIsLoggedInSubject(): void {
    this.isLoggedInSubject.next(this.isLoggedIn());
  }

  isLoggedIn(): boolean {
    return moment().isBefore(this.getExpiration());
  }

  getExpiration(): moment.Moment {
    const expiration: string | null = this.accessStorage().getItem('expires_at');
    const expiresAt = expiration === null ? 0 : JSON.parse(expiration);
    return moment(expiresAt * 1000);
  }

  getUsername(): string {
    let username = this.accessStorage().getItem('username');
    return username === null ? '' : username;
  }

  getIsLoggedInSubject(): BehaviorSubject<boolean> {
    return this.isLoggedInSubject;
  }

}
