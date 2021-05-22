import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDataComponent } from './add-data/add-data.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';

const routes: Routes = [
  {path: '',component:NewsFeedComponent},
  {path: 'add',component:AddDataComponent},
  {path: '**',redirectTo:'',pathMatch:"full"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
