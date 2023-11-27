import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';

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
        valor : 1,
    }
  }
  ngOnInit (){
    this.toMayus();
  }

  toMayus(){
    let nodeTitol = document.getElementById('titol')!;
    let nodeTitolMayus = document.getElementById('titolMayus')!;

    nodeTitolMayus.innerHTML = nodeTitol.innerHTML.toUpperCase();

    // nodeTitol.innerHTML = this.compA.nom.toUpperCase();
  }


}
