import {Component, OnInit} from '@angular/core';
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
import {MatInput} from "@angular/material/input";


export interface User {
  username: string;
  password: string;
  authStatus: string;
}

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
    MatCard
  ],
  providers: [
    AuthService,
    FormBuilder
  ],
  templateUrl: './login-panel.component.html',
  styleUrl: './login-panel.component.css'
})
export class LoginPanelComponent implements OnInit {
  form!: FormGroup;
  hide: boolean = true;
  user!: User;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: [null, [Validators.required, Validators.pattern('^[A-Za-zÀ-ÿ- ]{3,50}$')]],
      password: [null, [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&]).{8,30}')]],
    });
  }

  onLogin() : void {
    this.user = this.form.value;

    /*this.authService.login(this.user).subscribe(
      {
        next: () => {
          this.router.navigate(['home'])
            .then(() => this.displayService.openSnackBar(`User \'${this.user.username}\' is logged in!`))
        },
        error: () => this.displayService.openSnackBar(`Could not log in, try with other credentials or create a new user`)
      }
    );*/
  }

}
