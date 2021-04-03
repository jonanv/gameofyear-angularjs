import { Component, OnInit } from '@angular/core';

// Imports
import { GameService } from 'src/app/services/game.service';
import { first } from 'rxjs/operators';
import { Game, Response } from 'src/app/interfaces/game.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-game-of-the-year',
  templateUrl: './game-of-the-year.component.html',
  styleUrls: ['./game-of-the-year.component.css']
})
export class GameOfTheYearComponent implements OnInit {

  public games: Game[] = [];

  constructor(
    private gameService: GameService
  ) { }

  ngOnInit(): void {
    this.getGames();
  }

  public getGames(): void {
    this.gameService.getGames()
      .pipe(first())
      .subscribe((response: Game[]) => {
        this.games = response;
        console.log(this.games);
      }, (error) => {
        console.error(error);
      });
  }

  public voteByGame(id: string): void {
    this.gameService.postVoteGame(id)
      .pipe(first())
      .subscribe((response: Response) => {
        if (response.ok) {
          Swal.fire({
            icon: 'success',
            title: 'Gracias',
            text: response.message,
          });
        }
        else {
          Swal.fire({
            icon: 'error',
            title: 'El voto ha fallado.',
            text: response.message,
          });
        }
      });
  }
}
