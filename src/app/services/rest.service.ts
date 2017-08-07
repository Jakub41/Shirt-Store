import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import { Product } from './../models/product.model';

@Injectable()
export class RestService {
    public products: Product[] = [];

    constructor(private http: Http) {
    }

    private headers = new Headers({'Content-Type': 'application/json'});

    getAll() {
       return this.http.get('http://mock-shirt-backend.getsandbox.com/shirts', {
            headers: this.headers
        }).map(this.extractData).catch(this.handleError);

    }

    private extractData = (res: Response) => {
        let body = res.json();
        return body || {};
    }

    private handleError = (error: Response | any) => {
        return Observable.throw(error);
    }

}
