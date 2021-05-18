import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsFeedComponent } from './news-feed/news-feed.component';

const routes: Routes = [
  {path: '',component:NewsFeedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
