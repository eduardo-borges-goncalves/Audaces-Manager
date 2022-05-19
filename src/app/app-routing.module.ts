import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColectionsComponent } from './colections/colections.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { ModelsComponent } from './models/models.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { 
    path: '', 
    component: LayoutComponent, 
    children: [
      { path: '', component: HomeComponent},
      { path: 'colections', component: ColectionsComponent},
      { path: 'models', component: ModelsComponent}, 
      { path: 'help', component: HomeComponent}, 
      { path: 'send-comment', component: HomeComponent}
    ]
  },
  { path: 'login', component: LoginComponent}, 
  { path: 'forgot-password', component: ForgotPasswordComponent}, 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
