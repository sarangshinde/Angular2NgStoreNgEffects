import { MOVIESLIST } from './movieslist';
export interface State {

	movies:string[];
};

export const BeforeLoadState :State ={
movies:[]
};

export const Initialstate :State ={
movies:MOVIESLIST
};