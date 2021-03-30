import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './loginm/signin/signin.component';
import { SignupComponent } from './loginm/signup/signup.component';

const routes: Routes = [
  {
    path : 'signin', component: SigninComponent
  },
  {
    path: 'signup',component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
