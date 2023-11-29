import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';

// @ts-ignore
import {changeSize, countWords, firstChar, yellowSubmarine} from '../funcions.js';
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
    this.url();

    yellowSubmarine("h1");
    changeSize();
    // firstChar ();

  }

  toMayus(){
    let nodeTitol = document.getElementById('titol')!;
    let nodeTitolMayus = document.getElementById('titolMayus')!;

    nodeTitolMayus.innerHTML = nodeTitol.innerHTML.toUpperCase();

    // nodeTitol.innerHTML = this.compA.nom.toUpperCase();
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
