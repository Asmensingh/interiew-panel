import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/_core/auth/login/login.component';
import { RegisterComponent } from './component/_core/auth/register/register.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent,
    // canActivate:[AuthGuard]
  },
  { path:'register',
    component:RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
