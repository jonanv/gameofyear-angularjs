import { Component, OnInit } from '@angular/core';

// Imports
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Game } from '../../interfaces/game.interface';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private gamesCollection: AngularFirestoreCollection<Game>;
  public games: any[];

  constructor(
    private angularFirestore: AngularFirestore
  ) { }

  ngOnInit(): void {
    this.gamesCollection = this.angularFirestore.collection<Game>('goty');
    this.gamesCollection.valueChanges()
      .pipe(map((response: Game[]) => {
        return response.map(({name, votes}) => ({
          'name': name,
          'value': votes
        }));
      }))
      .subscribe((response: any) => {
        this.games = response;
      });
  }

}
