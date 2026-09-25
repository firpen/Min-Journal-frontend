import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from './auth';
import { catchError, map, of } from 'rxjs';

export const authGuard: CanActivateFn = () => {
  const authService = inject(Auth);
  const router = inject(Router);
  return authService.auth().pipe(
    map(() => true),
    catchError(() => of(router.createUrlTree(['login']))),
  );
};

export const alreadyLoggedInGuard: CanActivateFn = () => {
  const authService = inject(Auth);
  const router = inject(Router);
  return authService.auth().pipe(
    map(() => router.createUrlTree([''])),
    catchError(() => of(true)),
  );
};
