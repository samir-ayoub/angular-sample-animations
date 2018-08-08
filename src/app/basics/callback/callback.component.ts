import { Component, ChangeDetectorRef } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  animation
} from '@angular/animations';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss'],
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
    trigger('removeMe', [
      state('out', style({
        transform: 'scale(0)',
        opacity: 0
      })),
      transition('* => out', [
        animate('700ms 2s ease-out', keyframes([
          style({opacity: 1, transform: 'translateX(-8px)', offset: 0}),
          style({opacity: 0, transform: 'translateX(0)', offset: 0.3}),
          style({opacity: 0, transform: 'translateX(50px)', offset: 1}),
        ]))
      ])
    ])
  ]
})
export class CallbackComponent {
  
  btnState: string = 'in';
  eventTime: string;
  items = new Array();
  state: string;

  constructor() {}

  toggleState() {
    this.items.push('another item');
    this.state = 'fadeIn';
    this.eventTime ='Waiting';
    this.btnState = 'out';
  }

  animStart(event: any) {
    this.btnState = 'in';
  }

  animDone(event: any) {
    this.eventTime = `Done! It tooks ${event.totalTime}ms to complete`;
    this.btnState = 'out';
  }
}
