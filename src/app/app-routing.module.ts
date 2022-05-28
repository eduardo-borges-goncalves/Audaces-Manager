import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsComponent } from './pages/collections-page/collections.component';
import { EditCollectionComponent } from './pages/edit-collection-page/edit-collection.component';
import { EditModelComponent } from './pages/edit-model-page/edit-model.component';
import { ForgotPasswordComponent } from './pages/forgot-password-page/forgot-password.component';
import { HomeComponent } from './pages/home-page/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './pages/login-page/login.component';
import { ModelsComponent } from './pages/models/models.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { 
    path: '', 
    component: LayoutComponent, 
    children: [
      { path: '', component: HomeComponent},
      { path: 'collections', component: CollectionsComponent},
      { path: 'models', component: ModelsComponent}, 
      { path: 'help', component: HomeComponent}, 
      { path: 'send-comment', component: HomeComponent},
      { path: 'create-collection', component: EditCollectionComponent},
      { path: 'create-model', component: EditModelComponent},
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
