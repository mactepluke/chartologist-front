import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
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
import {MatInput} from "@angular/material/input";
import {MatButton, MatIconButton} from "@angular/material/button";
import {Router} from "@angular/router";
import {AuthService} from "../../auth/services/auth.service";
import {User} from "../../auth/models/User";
import {DisplayService} from "../../shared_services/display.service";

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
    MatHint
  ],
  providers: [
    AuthService,
    DisplayService
  ],
  templateUrl: './create-account-page.component.html',
  styleUrl: './create-account-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateAccountPageComponent implements OnInit {
  form!: FormGroup;
  hide = true;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService, private displayService: DisplayService) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
        username: [null, [Validators.required, Validators.pattern('^[A-Za-zÀ-ÿ- ]{3,50}$')]],
        password: [null, [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&]).{8,30}')]],
        confirmedPassword: [null, [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&]).{8,30}')]],
      },
      {
        updateOn: 'blur',
        validators: this.checkPasswords
      });
  }

  checkPasswords: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    // @ts-ignore
    let pass = group.get('password').value;
    // @ts-ignore
    let confirmPass = group.get('confirmedPassword').value;
    return pass === confirmPass ? null : {notSame: true}
  }

  onCreate() {
    let user: User = this.form.value;

    this.authService.createUser(user)
      .subscribe({
          next: (user) =>
            this.router.navigate(['dashboard'])
              .then(() => this.displayService.openSnackBar(`User \'${user.username}\' has been created!`)),
          error: () => this.displayService.openSnackBar(`Could not create user with username: \'${user.username}\'`)
        }
      )
  }

  onLoginWithAccount() {
    this.authService.logout();
    this.router.navigate(['dashboard']);
  }
}
