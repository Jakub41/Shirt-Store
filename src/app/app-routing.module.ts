import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components//home/home.component';

const routes: Routes = [    
    {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
    },
    {
        path: 'detail/:id',
        loadChildren: './components/detail/detail.module#DetailModule'
    },
    {
        path: 'cart',
        loadChildren: './components/shopping-cart/shopping-cart.module#ShoppingCartModule'
    },
    {
        path: '**',
        redirectTo: '',
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
