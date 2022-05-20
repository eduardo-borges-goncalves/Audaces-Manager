import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeaderDashboardComponent } from './components/header-dashboard/header-dashboard.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ModelsComponent } from './pages/models/models.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ListComponent } from './components/list/list.component';
import { CollectionsComponent } from './pages/collections/collections.component';
import { EditModelComponent } from './pages/edit-model/edit-model.component';
import { EditCollectionComponent } from './pages/edit-collection/edit-collection.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    HeaderDashboardComponent,
    DashboardComponent,
    ModelsComponent,
    LoginComponent,
    ForgotPasswordComponent,
    LayoutComponent,
    ListComponent,
    CollectionsComponent,
    EditModelComponent,
    EditCollectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
