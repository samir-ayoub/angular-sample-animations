import { Component, OnInit } from '@angular/core';

import { pageTransition } from '../../animations';

@Component({
  selector: 'app-how-to',
  templateUrl: './how-to.component.html',
  styleUrls: ['./how-to.component.css'],
  animations: [ pageTransition ]
})
export class HowToComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
