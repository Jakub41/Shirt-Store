import * as _ from 'lodash';
import { Product } from '../../models/product.model';
import { ActionReducer, Action } from "@ngrx/store";

export interface CartState {	
	products: { [k: string]: Product };
	pnum: { [k: string]: number };
	totalPrice: number;
}

export const initialState: CartState = {	
	products: {},
	pnum: {},
	totalPrice: 0
}

export const ShirtsReducer = (state: CartState = initialState, action: Action): CartState => {	
	let newState = Object.assign([], state);
	switch(action.type) {
		case 'ADD_CART':			
			newState.products[action.payload.item.id]=action.payload.item;
			if(newState.pnum[action.payload.item.id])
				newState.pnum[action.payload.item.id]+=1;
			else
				newState.pnum[action.payload.item.id]=1;
			newState.totalPrice+=action.payload.item.price;
			return newState;
		case 'REMOVE_ITEM':
			delete newState.products[action.payload.item.id];
			newState.pnum[action.payload.item.id]=0;
			newState.totalPrice-=action.payload.item.price;
			return newState;
		default:
			return state;
	}
};
