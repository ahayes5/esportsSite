import {Player} from './player';

export class Division {
  name: string;
  players: Player[];
  index: number;
  constructor(name: string, players: Player[], index: number) {
    this.name = name;
    this.players = players;
    this.index = index;
  }
  static compare(a: Division, b: Division): number {
    return a.compareTo(b);
  }
  compareTo(that: Division): number {
    return this.index - that.index;
  }
}
