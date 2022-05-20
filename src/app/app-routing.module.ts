import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsComponent } from './collections/collections.component';
import { EditCollectionComponent } from './edit-collection/edit-collection.component';
import { EditModelComponent } from './edit-model/edit-model.component';
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
      { path: 'collections', component: CollectionsComponent},
      { path: 'models', component: ModelsComponent}, 
      { path: 'help', component: HomeComponent}, 
      { path: 'send-comment', component: HomeComponent},
      { path: 'create-collection', component: EditCollectionComponent},
      { path: 'create-model', component: EditModelComponent},
      { path: 'edit-collection/:id', component: EditCollectionComponent},
      { path: 'edit-model/:id', component: EditModelComponent},
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
