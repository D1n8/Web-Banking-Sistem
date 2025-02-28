import { Routes } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AccountsListComponent } from './components/accounts-list/accounts-list.component';

export const routes: Routes = [
  // {
  //   path: '',
  //   component: HeaderComponent
  // },
  {
    path: 'login',
    component: LoginFormComponent
  },
  {
    path: 'my-accounts',
    component: AccountsListComponent
  }
];
