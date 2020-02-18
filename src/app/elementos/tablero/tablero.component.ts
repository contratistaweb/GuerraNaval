import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {
 columnas = ['A','B','C','D','E','F','G','H','I','J','K','L'];
 filas = ['1','2','3','4','5','6','7','8','9','10','11','12']
 

  constructor() { }

  ngOnInit() {
    
  }

}
