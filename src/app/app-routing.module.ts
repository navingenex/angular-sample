import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { PostResolver } from './posts/post-detail/post.resolver';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {path:'',component:LandingPageComponent},
  {path:'about',component:AboutComponent},
  {path:'posts',component:PostsComponent},
  {path:'post-detail/:id',component:PostDetailComponent,resolve:{post:PostResolver}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
