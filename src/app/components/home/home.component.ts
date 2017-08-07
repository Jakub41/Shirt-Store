import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from "@ngrx/store";
import * as Rx from 'rxjs/Rx';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import { MdSnackBar, Sort } from '@angular/material';
import { DomSanitizer, SafeStyle, SafeHtml } from '@angular/platform-browser';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';
import { RestService } from '../../services/rest.service';

import { AppState } from '../../reducers';
import { CartState } from './../../reducers/cart/cart.reducer';
import { Product } from '../../models/product.model';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
    public error: string;    
    public products: Product[] = [];
    
    public allowUnsort = true;
    public multiple = true;
    public gridView: GridDataResult;
    private sort: SortDescriptor[] = [];

    private _subs: Rx.Subscription[] = [];
    public busy: Rx.Subscription;

    constructor(
        private restService: RestService,
        private _sanitizer: DomSanitizer,
        private store:Store<AppState>,
        private _router: Router,
        private snackBar: MdSnackBar) {
    }

    ngOnInit() {
        this._subs=[
            this.busy = this.restService.getAll().subscribe(),
            this.restService.getAll().subscribe((r: any) => {                
                this.restService.products = r;
                this.products = r;                
                this.loadProducts();
            }, error => {
                this.showSnackMessage('Server Error');
                setTimeout(()=>{
                    this._router.navigate(['']);
                },1000);
            }),
        ];
    }

    protected sortChange(sort: SortDescriptor[]): void {
        this.sort = sort;
        this.loadProducts();
    }

    private loadProducts(): void {
        this.gridView = {
            data: orderBy(this.products, this.sort),
            total: this.products.length
        };
    }

    addToCart(product: Product) {
        this.store.dispatch({ type: 'ADD_CART', payload: {item: product}});
        this.showSnackMessage('Added to Chart List');
    }

    gotoDetail(product: Product){
        this._router.navigate(['/detail', product.id]);        
    }

    showSnackMessage(message: string) {
        this.snackBar.open(message, null, {
            duration: 1000
        });
    }

    private sizeScore = {
        'string': -1,
        s: 0,
        m: 1,
        l: 2,
        'x-large': 3,
    };

    backgroundImage(url: string): SafeStyle {
        return this._sanitizer.bypassSecurityTrustStyle(`url('${url}')`);		
    }
    
    ngOnDestroy() {
        if (this._subs) {
            this._subs.forEach(s => s.unsubscribe());
        }        
    }
}
