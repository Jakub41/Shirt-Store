import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from "@ngrx/store";
import * as Rx from 'rxjs/Rx';

import { AppState } from '../../reducers';
import { CartState } from './../../reducers/cart/cart.reducer';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

	public cartState: CartState = {products: {}, pnum: {}, totalPrice: 0};
	public productNum: number = 0;
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
					let keys = Object.keys(this.cartState.products);
					this.productNum = 0;
					keys.map(key=>{
						this.productNum+=this.cartState.pnum[key];
					})					
                }),
        ];
	}

	ngOnDestroy() {
		if (this._subs) {
			this._subs.forEach(s => s.unsubscribe());
		}        
	}

}
