import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderDashboardComponent } from './header-dashboard/header-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ModelsComponent } from './models/models.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LayoutComponent } from './layout/layout.component';
import { ListComponent } from './list/list.component';
import { CollectionsComponent } from './collections/collections.component';
import { EditModelComponent } from './edit-model/edit-model.component';
import { EditCollectionComponent } from './edit-collection/edit-collection.component';

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
