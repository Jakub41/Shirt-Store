import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MdButtonModule, MdIconModule, MdToolbarModule, MdCardModule, MdListModule, MdSnackBarModule,
    MdSortModule, MdTableModule, MdTooltipModule} from '@angular/material';
import { ShoppingCartComponent } from './shopping-cart.component';

const routes: Routes = [
    { path: '', component: ShoppingCartComponent }	
];

export const routing = RouterModule.forChild(routes);

@NgModule({
    declarations: [        
        ShoppingCartComponent
    ],
    exports: [ ShoppingCartComponent ],
    imports: [
        CommonModule,        
        MdToolbarModule,
        MdButtonModule,
        MdCardModule,
        MdIconModule,
        MdListModule,
        MdSnackBarModule,
        routing
    ],
    providers: [          
    ]    
})
export class ShoppingCartModule {
}
