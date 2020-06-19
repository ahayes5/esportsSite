import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {ContactComponent} from './components/contact/contact.component';
import {CompGamesComponent} from './components/comp-games/comp-games.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {SiegeComponent} from './components/comp-games/siege/siege.component';
import {LeagueComponent} from './components/comp-games/league/league.component';
import {RocketLeagueComponent} from './components/comp-games/rocket-league/rocket-league.component';
import {SmashComponent} from './components/comp-games/smash/smash.component';
import {NewsComponent} from './components/news/news.component';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'comp-games', component: CompGamesComponent},
  {path: 'news', component: NewsComponent},
  {path: 'comp-games/siege', component: SiegeComponent},
  {path: 'comp-games/league', component: LeagueComponent},
  {path: 'comp-games/rocket-league', component: RocketLeagueComponent},
  {path: 'comp-games/smash', component: SmashComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
