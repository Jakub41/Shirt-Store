import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MdButtonModule, MdIconModule,  MdCardModule, MdListModule, MdSnackBarModule } from '@angular/material';
import { DetailComponent } from './detail.component';

import { RestService} from '../../services/rest.service';

const routes: Routes = [
    { path: '', component: DetailComponent }	
];

export const routing = RouterModule.forChild(routes);

@NgModule({
    declarations: [
        DetailComponent
    ],
    exports: [ DetailComponent ],
    imports: [
        CommonModule,        
        MdButtonModule,
        MdCardModule,
        MdIconModule,        
        MdSnackBarModule,
        routing
    ],
    providers: []    
})
export class DetailModule {
}
