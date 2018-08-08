import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TodoComponent } from './todo.component';
import { HowToComponent } from './how-to/how-to.component';
import { ExamplesComponent } from './examples/examples.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app.routing';

@NgModule({
  imports: [
      CommonModule,
      AppRoutingModule,
      BrowserAnimationsModule,
  ],
  exports: [
      TodoComponent
  ],
  declarations: [
    TodoComponent,
    HowToComponent,
    ExamplesComponent
  ]
})
export class TodoModule { }
