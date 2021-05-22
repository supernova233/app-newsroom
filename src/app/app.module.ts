import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { NewsHeaderComponent } from './news-header/news-header.component';
import { BigNewsComponent } from './big-news/big-news.component';
import { BreakBarComponent } from './break-bar/break-bar.component';
import { NewsCardComponent } from './news-card/news-card.component';
import { GetInTouchBarComponent } from './get-in-touch-bar/get-in-touch-bar.component';
import { PagiBtnComponent } from './pagi-btn/pagi-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NewsFeedComponent,
    NewsHeaderComponent,
    BigNewsComponent,
    BreakBarComponent,
    NewsCardComponent,
    GetInTouchBarComponent,
    PagiBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
