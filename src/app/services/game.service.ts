import { Injectable } from '@angular/core';

// Imports
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Game } from '../interfaces/game.interface';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(
    private http: HttpClient
  ) { }

  public getGames(): Observable<Game[]> {
    return this.http.get(`${ environment.apiUrl }api/goty`)
      .pipe(map((response: Game[]) => {
        return response;
      }));
  }
}
