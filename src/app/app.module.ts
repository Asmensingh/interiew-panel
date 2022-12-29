import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularMaterialDependenciesModule } from './angular-material-dependencies/angular-material-dependencies.module'
import { NavBarComponent } from './component/_common/nav-bar/nav-bar.component';
import { AuthModule } from './component/_core/auth/auth.module';
import { ShareDataService } from './services/shareData/share-data.service';
import { ApiService } from './services/api/api.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpHeaderInterceptor } from './interceptor/http-header.interceptor';
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
  providers: [
    ApiService,
    ShareDataService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpHeaderInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
