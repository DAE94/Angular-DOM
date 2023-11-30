import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';

// @ts-ignore
import {changeBackground, changeSize, countWords, firstChar, yellowSubmarine} from '../funcions.js';
@Component({
  selector: 'app-comp-a',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comp-a.component.html',
  styleUrl: './comp-a.component.css'
})
export class CompAComponent implements OnInit{
  compA : any
  constructor() {
      this.compA = {
        nom : 'component a',
    }
  }
  ngOnInit (){
    this.toMayus();
    yellowSubmarine("h1");
    changeSize();
    changeBackground ();
    // firstChar ();
  }

  toMayus(){
    let nodeTitol = document.getElementById('titol')!;

    nodeTitol.innerHTML = nodeTitol.innerHTML.toUpperCase();


  }

  //---> Ex.2 <---//
  //Amb una funció
  url() {
    return document.location;
  }
  //Com a variable
  docUrl = document.location;

  protected readonly countWords = countWords;
}
