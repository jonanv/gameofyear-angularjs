import { Injectable } from '@angular/core';

// Imports
import { HttpClient } from '@angular/common/http';
import { map, tap } from "rxjs/operators";
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { Game, Response } from '../interfaces/game.interface';

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

  public postVoteGame(id: string): Observable<Response> {
    let body = {};
    return this.http.post<Response>(`${ environment.apiUrl }api/goty/${ id }`, body)
      .pipe(map((response: Response) => {
        return response;
      }));
  }
}
