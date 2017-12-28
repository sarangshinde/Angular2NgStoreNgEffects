import { ActionReducer,Action } from '@ngrx/store';
import { State, Initialstate,BeforeLoadState } from './state';
import { ADDMOVIE , UPDATEMOVIE,LOADMOVIE_EFFECT,LOADMOVIE_SUCCESS } from './actioncreator';

//export const MainActionReducer  = 
export function MainActionReducer (state=BeforeLoadState,action:Action) /*: ActionReducer<State>*/{
	 console.log('Action Came In'+ action.type);
	switch (action.type) {
			  	case ADDMOVIE:{
			  		return { movies:[...state.movies,action.payload]}
			  	}
			  	case UPDATEMOVIE: {
        		let movieIndex = state.movies.findIndex(movie => movie ===action.payload.oldvalue);
        		if(movieIndex>0)
        		state.movies.splice(movieIndex,1,action.payload.newvalue);
        		return { movies:state.movies};
        		}
        		case LOADMOVIE_EFFECT:{
				console.log('in load movie reducer');
        		}
        		case LOADMOVIE_SUCCESS:{
        			console.log('in load movie sucess reducer');
        			return { movies:action.payload};
        		}

			 	 default:{
			 	 	console.log('In Default');
			 	 	return state;
        		}
			  	
				}
			  
	
}
/*
export function MainActionReducer():ActionReducer<State>{
return	(state=Initialstate,action:Action)=>{
	 console.log('Action Came In'+ action.type);


			  switch (action.type) {
			  	case INCREMENT:{
			  		return { counter: state.counter+1 }
			  	}

			  	case EVENT_FROM_EFFECT: {
        	
        	
        		return {
          				counter:4
				        }
				      }
			  	
			  	default:{
			  		return state;
			  	}
			  		

			}
	}
}*/

/*export const MainActionReducer:ActionReducer<State>= (state=Initialstate,action:Action) => {

			  console.log('Action Came In'+ action.type);

			  switch (action.type) {
			  	case INCREMENT:{
			  		return { counter: state.counter+1}
			  	}

			  	case EVENT_FROM_EFFECT: {
        	
        	console.log('we cheesin in the reducer over here!');
        		return {
          				counter: 4
				        }
				      }
			  	
			  	default:{
			  		return state;
			  	}
			  		

			}
		};
*/
/*export function MainActionReducer() : ActionReducer<State> { 
			
	return		 (state=Initialstate,action:Action) => {

			  console.log('Action Came In'+ action.type);

			  switch (action.type) {
			  	case INCREMENT:{
			  		return { counter: state.counter+1}
			  	}

			  	case EVENT_FROM_EFFECT: {
        	
        	console.log('we cheesin in the reducer over here!');
        		return {
          				counter: 4
				        }
				      }
			  	
			  	default:{
			  		return state;
			  	}
			  		

			}
		}*/

