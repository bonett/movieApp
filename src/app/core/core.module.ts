/* Modules */
import { NgModule } from '@angular/core';

/* Components */
import { NavbarComponent } from './components/navbar/navbar.component';
import { NoPageFoundComponent } from './components/no-page-found/no-page-found.component';

@NgModule({
    imports: [],
    declarations: [
        NavbarComponent,
        NoPageFoundComponent
    ],
    exports: [
        NavbarComponent,
        NoPageFoundComponent
    ]
})
export class CoreModule { }