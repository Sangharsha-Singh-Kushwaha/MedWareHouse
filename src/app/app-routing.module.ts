import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './MWH/home-page/home-page.component';
const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'user',
    loadChildren: () =>
      import('./MWH/user/user.module').then((m) => m.UserModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
