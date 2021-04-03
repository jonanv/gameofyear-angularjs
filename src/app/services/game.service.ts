import { Injectable } from '@angular/core';

// Imports
import { HttpClient } from '@angular/common/http';
import { tap } from "rxjs/operators";
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Game } from '../interfaces/game.interface';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private games: Game[] = [];

  constructor(
    private http: HttpClient
  ) { }

  public getGames(): Observable<Game[]> {
    if (this.games.length > 0) {
      // No tenemos juegos
      console.log('Desde cache');
      return of(this.games);
    } else {
      console.log('Desde internet');
      return this.http.get<Game[]>(`${ environment.apiUrl }api/goty`)
        .pipe(tap((response: Game[]) => {
          this.games = response;
        }));
    }
  }
}
