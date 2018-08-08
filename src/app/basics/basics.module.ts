import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app.routing';
import { BasicsComponent } from './basics.component';
import { BasicComponent } from './basic/basic.component';
import { CallbackComponent } from './callback/callback.component';
import { TransitionComponent } from './transition/transition.component';

@NgModule({
    imports: [
        CommonModule,
        AppRoutingModule,
        BrowserAnimationsModule,
    ],
    exports: [
        BasicsComponent
    ],
    declarations: [
        BasicComponent,
        CallbackComponent,
        TransitionComponent
    ]
})
export class TodoModule { }
