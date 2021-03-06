import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http"
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home-page/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeaderDashboardComponent } from './components/header-dashboard/header-dashboard.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './pages/login-page/login.component';
import { ForgotPasswordComponent } from './pages/forgot-password-page/forgot-password.component';
import { LayoutComponent } from './components/layout/layout.component';
import { CollectionsComponent } from './pages/collections-page/collections.component';
import { EditModelComponent } from './pages/edit-model-page/edit-model.component';
import { EditCollectionComponent } from './pages/edit-collection-page/edit-collection.component';
import { CollectionsListComponent } from './components/collections-list/collections-list.component';
import { ModelsListComponent } from './components/models-list/models-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { ModelsPageComponent } from './pages/models-page/models-page.component';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    HeaderDashboardComponent,
    DashboardComponent,
    LoginComponent,
    ForgotPasswordComponent,
    LayoutComponent,
    CollectionsComponent,
    EditModelComponent,
    EditCollectionComponent,
    CollectionsListComponent,
    ModelsListComponent,
    ModelsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "pt"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
