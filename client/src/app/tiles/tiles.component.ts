import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})
export class TilesComponent implements OnInit {

  tiles: Tile[];
  constructor() { }

  ngOnInit() {
     this.tiles = [
      {text: 'One', cols: 1, rows: 2, color: 'lightblue'},
      {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
      {text: 'Three', cols: 1, rows: 2, color: 'lightpink'},
      {text: 'Four', cols: 1, rows: 2, color: '#DDBDF1'},
    ];
  }

}
