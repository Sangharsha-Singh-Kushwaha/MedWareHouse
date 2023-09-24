import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserCreateAccountComponent } from './user-create-account/user-create-account.component';

@NgModule({
  declarations: [UserLoginComponent, UserCreateAccountComponent],
  imports: [CommonModule, UserRoutingModule],
})
export class UserModule {}
