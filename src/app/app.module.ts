import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CompGamesComponent } from './components/comp-games/comp-games.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { SiegeComponent } from './components/comp-games/siege/siege.component';
import { LeagueComponent } from './components/comp-games/league/league.component';
import { RocketLeagueComponent } from './components/comp-games/rocket-league/rocket-league.component';
import { SmashComponent } from './components/comp-games/smash/smash.component';
import {MatIconModule} from '@angular/material/icon';
import { NewsComponent } from './components/news/news.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CompGamesComponent,
    PageNotFoundComponent,
    SiegeComponent,
    LeagueComponent,
    RocketLeagueComponent,
    SmashComponent,
    NewsComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatDividerModule,
        MatListModule,
        MatIconModule,
        HttpClientModule,
        MatChipsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
