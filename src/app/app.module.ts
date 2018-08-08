import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { BasicComponent } from './basics/basic/basic.component';
import { TodoModule } from './todo/todo.module';
import { TransitionComponent } from './basics/transition/transition.component';
import { CallbackComponent } from './basics/callback/callback.component';
import { BasicsComponent } from './basics/basics.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    TransitionComponent,
    CallbackComponent,
    BasicsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TodoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
