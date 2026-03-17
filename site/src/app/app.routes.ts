import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { ConsumosComponent } from './features/consumos/consumos.component';
import { ObjetivosComponent } from './features/objetivos/objetivos.component';
import { RecomendacionesComponent } from './features/recomendaciones/recomendaciones.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  {
    path: '',
    component: LayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: '', component: DashboardComponent },
      { path: 'consumo', component: ConsumosComponent },
      { path: 'objetivos', component: ObjetivosComponent },
      { path: 'recomendaciones', component: RecomendacionesComponent },
    ],
  },

  { path: '**', redirectTo: '' },
];
