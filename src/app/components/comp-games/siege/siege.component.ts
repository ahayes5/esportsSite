import { Component, OnInit } from '@angular/core';
import {ROSTER} from './siege-roster';
import {Division} from '../division';
import {Player} from '../player';

@Component({
  selector: 'app-siege',
  templateUrl: './siege.component.html',
  styleUrls: ['./siege.component.scss']
})
export class SiegeComponent implements OnInit {
  roster: Division[];
  divisionSortFn = (a, b) => {
    return Player.compare(a, b);
  }
  playerSortFn = (a, b) => {
    return Player.compare(a, b);
  }
  constructor() { }

  ngOnInit(): void {
    this.roster = ROSTER;
  }

}
