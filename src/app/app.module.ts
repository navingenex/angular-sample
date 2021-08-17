import { PostResolver } from './posts/post-detail/post.resolver';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavBarComponent } from './components/navbar/navbar.component';
import { PostsComponent } from './posts/posts.component';
import { HttpAppInterceptor } from './services/http-interceptor';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Posts } from './model/posts';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
@NgModule({
  declarations: [
    AppComponent,LandingPageComponent,NavBarComponent,PostsComponent,PostDetailComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    HttpClientModule
  ],
  providers: [
    { provide:HTTP_INTERCEPTORS,useClass:HttpAppInterceptor,multi:true},
    PostResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
