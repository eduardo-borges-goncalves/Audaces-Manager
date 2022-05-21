import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http"
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeaderDashboardComponent } from './components/header-dashboard/header-dashboard.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ModelsComponent } from './pages/models/models.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { LayoutComponent } from './components/layout/layout.component';
import { CollectionsComponent } from './pages/collections/collections.component';
import { EditModelComponent } from './pages/edit-model/edit-model.component';
import { EditCollectionComponent } from './pages/edit-collection/edit-collection.component';
import { CollectionsListComponent } from './components/collections-list/collections-list.component';
import { ModelsListComponent } from './components/models-list/models-list.component';

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
  
    CollectionsComponent,
    EditModelComponent,
    EditCollectionComponent,
    CollectionsListComponent,
    ModelsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
