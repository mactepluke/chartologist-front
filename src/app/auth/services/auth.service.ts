import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  public isLoggedIn() : boolean {
    return false;
  }

}
