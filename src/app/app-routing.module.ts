import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsComponent } from './pages/collections-page/collections.component';
import { EditCollectionComponent } from './pages/edit-collection-page/edit-collection.component';
import { EditModelComponent } from './pages/edit-model-page/edit-model.component';
import { ForgotPasswordComponent } from './pages/forgot-password-page/forgot-password.component';
import { HomeComponent } from './pages/home-page/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './pages/login-page/login.component';
import { ModelsPageComponent } from './pages/models-page/models-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { 
    path: '', 
    component: LayoutComponent, 
    children: [
      { path: 'home', component: HomeComponent},
      { path: 'collections', component: CollectionsComponent},
      { path: 'models', component: ModelsPageComponent}, 
      { path: 'help', component: HomeComponent}, 
      { path: 'send-comment', component: HomeComponent},
      { path: 'collections/create', component: EditCollectionComponent},
      { path: 'models/create', component: EditModelComponent},
      { path: 'collections/edit/:id', component: EditCollectionComponent},
      { path: 'models/edit/:id', component: EditModelComponent},
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
