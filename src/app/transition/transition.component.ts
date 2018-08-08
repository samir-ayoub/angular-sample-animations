import { Component, ChangeDetectorRef } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-transition',
  templateUrl: './transition.component.html',
  styleUrls: ['./transition.component.scss'],
  animations: [
    trigger('myTrigger', [
      state('fadeIn', style({
        opacity: 1
      })),
      transition('void => *', [
        animate(1000, keyframes([
          style({opacity: 0, transform: 'translateY(-30px)', offset: 0}),
          style({opacity: 1, transform: 'translateY(5px)', offset: 0.3}),
          style({opacity: 1, transform: 'translateY(0)', offset: 1}),
        ]))
      ])
    ]),
  ]
})
export class TransitionComponent {

  items = new Array();
  state: string;

  constructor(private cdRef: ChangeDetectorRef) {}

  toggleState() {
    this.items.push('another item');
    this.state = 'fadeIn';
  }
  
}
