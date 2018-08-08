import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicComponent } from './basics/basic/basic.component';
import { BasicsComponent } from './basics/basics.component';
import { CallbackComponent } from './basics/callback/callback.component';
import { ExamplesComponent } from './todo/examples/examples.component';
import { HowToComponent } from './todo/how-to/how-to.component';
import { TodoComponent } from './todo/todo.component';
import { TransitionComponent } from './basics/transition/transition.component';

const routes: Routes = [
  { path: '', redirectTo: '/basic', pathMatch: 'full' },
  {
    path: 'basics', component: BasicsComponent, children: [
      { path: 'basic', component: BasicComponent },
      { path: 'transition', component: TransitionComponent },
      { path: 'callback', component: CallbackComponent },
    ]
  },
  {
    path: 'todo', component: TodoComponent, children: [
      { path: 'howto', component: HowToComponent },
      { path: 'examples', component: ExamplesComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
