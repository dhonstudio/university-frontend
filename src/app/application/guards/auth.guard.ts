import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  if (!authService.isLoggedIn()) {
    const route = inject(Router);
    route.navigate(['login']);
  }
  return true;
};
