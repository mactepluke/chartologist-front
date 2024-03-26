import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {MatButton, MatIconButton} from "@angular/material/button";
import {AuthService} from "../../auth/services/auth.service";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn
} from "@angular/forms";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {User} from "../../auth/models/User";
import {UserService} from "../../shared_services/user.service";
import {MatFormField, MatHint, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput, MatInputModule} from "@angular/material/input";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'sycm-dashboard-panel',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatCardSubtitle,
    MatCardHeader,
    MatCardContent,
    MatCardActions,
    MatButton,
    ReactiveFormsModule,
    MatSlideToggle,
    MatFormField,
    MatHint,
    MatIcon,
    MatIconButton,
    MatInput,
    MatLabel,
    MatSuffix,
    MatInputModule,
    AsyncPipe
  ],
  providers: [
    UserService
  ],
  templateUrl: './dashboard-panel.component.html',
  styleUrl: './dashboard-panel.component.css'
})
export class DashboardPanelComponent implements OnInit {
  @Output()
  isLoggedIn: EventEmitter<boolean> = new EventEmitter<boolean>
  user!: User;
  form!: FormGroup;
  hide = true;


  constructor(private authService: AuthService, private formBuilder: FormBuilder, private userService: UserService) {
    this.user = new User();
  }

  ngOnInit(): void {
    this.userService.findUser(this.authService.getUsername()).subscribe((user: User) => {
      this.user = user;
      this.resetForm()
    });

    this.form = this.formBuilder.group(this.userService.getFormControls(),
      {
        updateOn: 'blur',
        validators: this.checkPasswords
      });
  }

  resetForm(): void {
    console.log(this.user.username);
    this.form.setValue({
      username: this.user.username,
      password: this.user.password,
      confirmedPassword: ''
    });
  }

  onLogout(): void {
    this.authService.logout();
    this.isLoggedIn.emit(this.authService.isLoggedIn())
  }

  checkPasswords: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    // @ts-ignore
    let pass = group.get('password').value;
    // @ts-ignore
    let confirmPass = group.get('confirmedPassword').value;
    return pass === confirmPass ? null : {notSame: true}
  }
}
