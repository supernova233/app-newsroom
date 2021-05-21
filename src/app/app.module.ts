import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { NewsHeaderComponent } from './news-header/news-header.component';
import { BigNewsComponent } from './big-news/big-news.component';
import { BreakBarComponent } from './break-bar/break-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NewsFeedComponent,
    NewsHeaderComponent,
    BigNewsComponent,
    BreakBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
