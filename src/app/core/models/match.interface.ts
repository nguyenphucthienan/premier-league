import { Club } from './club.interface';
import { Goal } from './goal.interface';
import { Kit } from './kit.interface';
import { Stadium } from './stadium.interface';

export interface Match {
  id: number;
  round: number;
  homeClub: Club;
  awayClub: Club;
  homeClubKit: Kit;
  awayClubKit: Kit;
  homeScore: number;
  awayScore: number;
  stadium: Stadium;
  matchTime: Date;
  isPlayed: boolean;
  goals?: Goal[];
}
