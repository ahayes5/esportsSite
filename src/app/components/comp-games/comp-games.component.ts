import { Component, OnInit } from '@angular/core';
import {GAMES} from './game-list';
import {Game} from './game';

@Component({
  selector: 'app-comp-games',
  templateUrl: './comp-games.component.html',
  styleUrls: ['./comp-games.component.scss']
})
export class CompGamesComponent implements OnInit {
  games = GAMES;

  constructor() { }

  ngOnInit(): void {
    this.games = GAMES;
  }

}
