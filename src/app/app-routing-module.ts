import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { alreadyLoggedInGuard, authGuard } from './services/auth-guard';

const routes: Routes = [
  {
    path: '',
    component: Home,
    canActivate: [authGuard]
  },
  {
    path: 'login',
    component: Login,
    canActivate: [alreadyLoggedInGuard]
  },
  {
    path: 'register',
    component: Register,
    canActivate: [alreadyLoggedInGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
