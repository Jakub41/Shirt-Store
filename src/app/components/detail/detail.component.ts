import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import * as Rx from 'rxjs/Rx';

import { MdSnackBar } from '@angular/material';
import { Router, Event, NavigationEnd, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import { RestService } from '../../services/rest.service';

import { AppState } from '../../reducers';
import { CartState } from './../../reducers/cart/cart.reducer';
import { Product } from '../../models/product.model';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

    public product: Product;         
	private _subs: Rx.Subscription[] = [];

    constructor(
        private restService: RestService,
        private route: ActivatedRoute,
        private router: Router,
        private store: Store<AppState>,
        public snackBar: MdSnackBar) {
    }

    ngOnInit() {        

        this._subs=[            
            this.route.params.subscribe(params=>{                
                this.product = _.find(this.restService.products, {'id': parseInt(params['id'])});
            })
        ];
    }

    addToMyCart(product: Product) {
        this.store.dispatch({ type: 'ADD_CART', payload: {item: product}});
        this.showSnackMessage('Added to Cart List');
    }

    showSnackMessage(message: string) {
        this.snackBar.open(message, null, {
            duration: 1000
        });
    }

}
