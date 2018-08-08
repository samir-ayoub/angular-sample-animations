import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
  animations: [
    trigger('myTrigger', [
      state('small', style({transform: 'scale(1)'})),
      state('large', style({transform: 'scale(1.4)'})),
      transition('small => large', animate('600ms 0s ease-out')),
    ])
  ]
})
export class BasicComponent {
  state: string = 'small';

  toggleState() {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }
}
