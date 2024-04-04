import {ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {DisplayService} from "../../shared_services/display.service";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {AuthService} from "../../auth/services/auth.service";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatInput, MatInputModule} from "@angular/material/input";
import {MatDivider} from "@angular/material/divider";
import {environment} from "../../../environments/environment";
import {exhaustMap, Subject, timeout} from "rxjs";
import {User} from "../../auth/models/User";
import {MatCheckbox} from "@angular/material/checkbox";


@Component({
  selector: 'sycm-login-panel',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLinkActive,
    MatCardActions,
    MatLabel,
    MatIcon,
    MatFormField,
    MatCardContent,
    MatCardSubtitle,
    MatCardTitle,
    MatCardHeader,
    MatButton,
    RouterLink,
    MatIconButton,
    MatInput,
    MatCard,
    MatDivider,
    MatInputModule,
    MatCheckbox
  ],
  providers: [
    FormBuilder
  ],
  templateUrl: './login-panel.component.html',
  styleUrl: './login-panel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPanelComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  hide: boolean = true;
  @Output()
  isLoggedIn : EventEmitter<boolean> = new EventEmitter<boolean>
  loginRequest$: Subject<User> = new Subject<User>();

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private displayService: DisplayService) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: [null, [Validators.required, Validators.pattern(environment.usernameRegex)]],
      password: [null, [Validators.required, Validators.pattern(environment.passwordRegex)]],
      rememberMe: [false]
    });
  }

  ngOnDestroy() {
    this.loginRequest$.complete();
  }

  onLogin() : void {
    this.loginRequest$.pipe(
      exhaustMap((user: User) =>
        this.authService.login(user).pipe(
          timeout(5000))
      )
    ).subscribe({
      next: (user) => {
        this.isLoggedIn.emit(this.authService.isLoggedIn());
        this.displayService.openSnackBar(`User '${user.body?.username}' is logged in!`);
      },
      error: (error) => {
        console.log(error);
        this.displayService.openSnackBar(`Could not log in, try with other credentials or create a new user`);
      }
    });

    this.loginRequest$.next(this.form.value);
  }



}
