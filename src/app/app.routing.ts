import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicComponent } from './basic/basic.component';
import { CallbackComponent } from './callback/callback.component';
import { ExamplesComponent } from './todo/examples/examples.component';
import { HowToComponent } from './todo/how-to/how-to.component';
import { TodoComponent } from './todo/todo.component';
import { TransitionComponent } from './transition/transition.component';

const routes: Routes = [
  { path: '', redirectTo: '/basic', pathMatch: 'full' },
  { path: 'basic', component: BasicComponent },
  { path: 'transition', component: TransitionComponent },
  { path: 'callback', component: CallbackComponent },
  { path: 'todo', component: TodoComponent, children: [
    { path: 'howto', component: HowToComponent },
    { path: 'examples', component: ExamplesComponent },
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
