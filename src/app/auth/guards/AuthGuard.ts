import {CanActivateFn, Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {inject} from "@angular/core";
import {DisplayService} from "../../shared_services/display.service";

export function AuthGuard(): CanActivateFn {
  return isAllowed;
}

function isAllowed(): boolean {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  if (authService.isLoggedIn() ) {
    return true;
  }

  const displayService: DisplayService = inject(DisplayService);
  router.navigateByUrl('dashboard').then(() => displayService.openSnackBar('You must be logged in to access this page!'));

  return false;
}
