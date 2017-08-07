import {Component, OnInit} from '@angular/core';
import { Store } from "@ngrx/store";
import * as Rx from 'rxjs/Rx';

import { AppState } from '../../reducers';
import { CartState } from './../../reducers/cart/cart.reducer';
import { Product } from '../../models/product.model';

@Component({
    selector: 'app-shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
    
    public cartState: CartState = {products: {}, pnum: {}, totalPrice: 0};
    public productIds: string[]=[];
    public totalNum: number = 0;
    private _subs: Rx.Subscription[] = [];

    constructor(        
        private store:Store<AppState>        
    ) {
    }

    ngOnInit() {
        this._subs=[
            this.store.select('shoppingCart')
                .subscribe( (data: CartState )=> {
                    this.cartState = data;
                    this.productIds=Object.keys(this.cartState.products);
                    this.totalNum = 0;
                    this.productIds.map(key=>{
						this.totalNum+=this.cartState.pnum[key];
					})
                }),
        ];
    }

    remove(id: number) {        
        this.store.dispatch({ type: 'REMOVE_ITEM', payload: {item: this.cartState.products[id]}});        
    }    
}
