import { Routes } from '@angular/router';
import { UsersComponent } from './ejemplo/pages/users/users.component';

export const routes: Routes = [
  {
   path: 'user',
  component: UsersComponent,
  },
  {
    path: '**',
    redirectTo: 'user',
  }

];
