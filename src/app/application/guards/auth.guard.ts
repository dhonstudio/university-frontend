import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  if (true) {
    const route = inject(Router);
    route.navigate(['login']);
  }
  return true;
};
