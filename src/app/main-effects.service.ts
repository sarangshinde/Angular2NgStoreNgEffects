import { Injectable } from '@angular/core';
import { Effect,Actions,toPayload} from '@ngrx/effects';
import { Observable } from 'rxjs';
import { MOVIESLIST } from './movieslist';

@Injectable()
export class MainEffects {

  constructor(private action: Actions) { 
  }


@Effect() loadMovieEffect$ = 
      this.action.ofType('LOADMOVIE_EFFECT')
      .map(toPayload)
      .switchMap(action => { 
        console.log('in load movie effects');
        return Observable.of({type:'LOADMOVIE_SUCCESS',payload:MOVIESLIST})
      });
/*@Effect()
update$= this.action.ofType('SUPER_SIMPLE_EFFECT')
					 .switchMap( () => Observable.of({type: "SUPER_SIMPLE_EFFECT_HAS_FINISHED"}));	

@Effect() effectWithPayloadExample$ = this.action
    .ofType('SEND_PAYLOAD_TO_EFFECT')
    .map(toPayload)
    .switchMap(payload => {
      console.log('the payload was: ' + payload.message);
      return Observable.of({type: "PAYLOAD_EFFECT_RESPONDS", payload: {message: "The effect says hi!"}})
    });


  @Effect() timeEffect = this.action
    .ofType('SET_TIMER')
    .map(toPayload)
    .switchMap(payload =>
      Observable.timer(payload.seconds * 1000)
        .switchMap(() =>
          Observable.of({type: "TIMER_FINISHED"})
        )
    )*/
}
