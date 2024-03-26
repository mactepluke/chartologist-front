import {Injectable} from '@angular/core';
import {User} from "../auth/models/User";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  findUser(username: string): Observable<User> {
    return this.http.get<User>(`${environment.backend_address}/user/get?username=${username}`);
  }

  getFormControls() {
    return {
      username: [null, [Validators.required, Validators.pattern(environment.usernameRegex)]],
      password: [null, [Validators.required, Validators.pattern(environment.passwordRegex)]],
      confirmedPassword: [null, [Validators.required, Validators.pattern(environment.passwordRegex)]],
    }
  }

}
