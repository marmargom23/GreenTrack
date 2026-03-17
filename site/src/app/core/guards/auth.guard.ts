import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  // Rutas públicas
  const publicRoutes = ['/login', '/register'];

  // Si la ruta es pública → permitir siempre
  if (publicRoutes.includes(state.url)) {
    return true;
  }

  // Si NO está autenticado → mandarlo al login
  if (!auth.isAuthenticated()) {
    return router.createUrlTree(['/login']);
  }

  // Si está autenticado → permitir
  return true;
};
