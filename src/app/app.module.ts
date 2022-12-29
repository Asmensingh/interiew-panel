import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularMaterialDependenciesModule } from './angular-material-dependencies/angular-material-dependencies.module'
import { NavBarComponent } from './component/_common/nav-bar/nav-bar.component';
import { AuthModule } from './component/_core/auth/auth.module';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialDependenciesModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
