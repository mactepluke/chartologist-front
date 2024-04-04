import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn
} from "@angular/forms";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {MatFormField, MatHint, MatLabel} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput, MatInputModule} from "@angular/material/input";
import {MatButton, MatIconButton} from "@angular/material/button";
import {Router} from "@angular/router";
import {AuthService} from "../../auth/services/auth.service";
import {User} from "../../auth/models/User";
import {DisplayService} from "../../shared_services/display.service";
import {exhaustMap, Subject, timeout} from "rxjs";
import {UserService} from "../../shared_services/user.service";

@Component({
  selector: 'sycm-create-account-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCardHeader,
    MatCard,
    MatCardContent,
    MatCardTitle,
    MatCardSubtitle,
    MatFormField,
    MatIcon,
    MatInput,
    MatIconButton,
    MatCardActions,
    MatButton,
    MatLabel,
    MatHint,
    MatInputModule
  ],
  providers: [
    UserService
  ],
  templateUrl: './create-account-page.component.html',
  styleUrl: './create-account-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateAccountPageComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  hide = true;
  createRequest$: Subject<User> = new Subject<User>();

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService, private displayService: DisplayService, private userService: UserService) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group(this.userService.getFormControls(),
      {
        updateOn: 'blur',
        validators: this.checkPasswords
      });

  }

  ngOnDestroy() {
    this.createRequest$.complete();
  }

  checkPasswords: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    // @ts-ignore
    let pass = group.get('password').value;
    // @ts-ignore
    let confirmPass = group.get('confirmedPassword').value;
    return pass === confirmPass ? null : {notSame: true}
  }


  onCreate() {
    this.createRequest$.pipe(
      exhaustMap((user: User) => this.authService.createUser(user).pipe(timeout(5000))
      )
    ).subscribe(
      {
        next: (user) => {
          this.authService.logout();
          this.router.navigate(['dashboard'])
            .then(() => this.displayService.openSnackBar(`User \'${user.username}\' has been created!`))
        },
        error: (error) => {
          console.log(error);
          this.displayService.openSnackBar('Could not create user.')
        }
      }
    );

    this.createRequest$.next(this.form.value);
  }

  onLoginWithAccount() {
    this.authService.logout();
    this.router.navigate(['dashboard']);
  }
}
