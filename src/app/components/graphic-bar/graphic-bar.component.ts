import { Component, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-graphic-bar',
  templateUrl: './graphic-bar.component.html',
  styleUrls: ['./graphic-bar.component.css']
})
export class GraphicBarComponent implements OnDestroy {

  @Input() public games: any[] = [];

  // options
  public showXAxis = true;
  public showYAxis = true;
  public gradient = true;
  public showLegend = true;
  public showXAxisLabel = true;
  public xAxisLabel = 'Juegos';
  public showYAxisLabel = true;
  public yAxisLabel = 'Votos';

  public colorScheme = 'nightLights';

  private intervalo;

  constructor() {
    // this.intervalo = setInterval(() => {
    //   console.log('tick');

    //   const newResults = [...this.results];

    //   for (let i in newResults) {
    //     newResults[i].value = Math.round(Math.random() * 500);
    //   }

    //   this.results = [...newResults];
    // }, 1500);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    clearInterval(this.intervalo);
  }

  public onSelect(event: any): void {
    console.log(event);
  }

}
