import {Player} from '../player';
import {Division} from '../division';
import {GOLD} from './siege-division-gold';
import {GREEN} from './siege-division-green';

export const ROSTER: Division[] = [
  new Division('Gold', GOLD, 1),
  new Division('Green', GREEN, 2)
];
