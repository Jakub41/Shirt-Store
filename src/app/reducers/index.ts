import { combineReducers } from '@ngrx/store';
import * as _ from 'lodash';
import * as cart from './cart/cart.reducer';

export interface AppState {    
    shirts: {};    
}

const initialState: AppState = {
	shirts: {}
}

const reducers = {	
	shoppingCart: cart.ShirtsReducer	
};

const combinedReducers = combineReducers(reducers);

export function reducer(state: any, action: any) {
  return combinedReducers(state, action);
}
