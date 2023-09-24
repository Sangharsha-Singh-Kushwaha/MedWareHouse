import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserCreateAccountComponent } from './user-create-account/user-create-account.component';

const routes: Routes = [
  { path: 'userLogin', component: UserLoginComponent },
  { path: 'userSignUp', component: UserCreateAccountComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
