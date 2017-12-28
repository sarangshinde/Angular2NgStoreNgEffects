import { Component,ElementRef,ViewChild} from '@angular/core';
import { State } from './state';
import { ADDMOVIE,UPDATEMOVIE,LOADMOVIE_EFFECT} from './actioncreator';
import { Store } from '@ngrx/store';
import { MOVIESLIST } from './movieslist';
//import {Observable} from 'rxjs/Observable';
import { Observable,Subscriber }  from 'rxjs/Rx';
import  'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Anguler Ng Rx App';
  currentCounter ='';
  movies=MOVIESLIST;
  @ViewChild('searchValue') searchValue:ElementRef;
  @ViewChild('valueToBeAdd') valueToBeAdd:ElementRef;
  @ViewChild('valueToBeUpdated') valueToBeUpdated:ElementRef;
  @ViewChild('selectedValues') selectedValues:any;
  

  

  ngOnInit(){
    console.log(this.searchValue.nativeElement);
   /* Observable.fromEvent(this.searchValue.nativeElement,'keyup')
               .debounceTime(150)
        .distinctUntilChanged()
        .subscribe(()=> {let searchedmovies = this.movies.filter(movie => movie.movie_title === this.searchValue.nativeElement.value); 
          if(searchedmovies.length>0)
          {
            this.movies=searchedmovies;
          }
          else{
            
          }
        });
*/


/*Observable.fromEvent(this.valueToBeAdd.nativeElement,'keyup.enter')
               .debounceTime(150)
        .distinctUntilChanged()
        .subscribe(()=> {this.movies.push(this.valueToBeAdd.nativeElement.value);});


Observable.fromEvent(this.valueToBeUpdated.nativeElement,'keyup.enter')
               .debounceTime(150)
        .distinctUntilChanged()
        .subscribe(()=> {let indexUpdate = this.movies.findIndex(movie => movie.movie_title === this.valueToBeUpdated.nativeElement.value);
               if(indexUpdate>0)
                this.movies[indexUpdate] = this.valueToBeUpdated.nativeElement.value; 
        });*/

  }



  updateMovie(movie:any){
    //console.log(this.selectedValues.selected.value);

    this.mystore.dispatch({type :UPDATEMOVIE,payload:{newvalue:
      this.valueToBeUpdated.nativeElement.value,oldvalue:this.selectedValues.selected.value}
    });
   //  mystore.dispatch( { type : INCREMENT});
   /* let indexUpdate = this.movies.findIndex(movie => movie === this.selectedValues.selected.value);
    if(indexUpdate>0)
                this.movies[indexUpdate] = this.valueToBeUpdated.nativeElement.value; 
              else
                this.movies = [...this.movies,this.valueToBeUpdated.nativeElement.value]
   */     
  }

  addMovie(movie:any){
this.mystore.dispatch({type :ADDMOVIE,payload:this.valueToBeAdd.nativeElement.value});
//this.movies.push(this.valueToBeAdd.nativeElement.value);
  }


  setValueToUpdate(setValueToUpdate:any)
  {
    console.log('setValueToUpdate  ' +setValueToUpdate);
    this.valueToBeUpdated.nativeElement.value= setValueToUpdate.selected.value;

  }

  constructor(private mystore:Store<State>){



  	console.log('we have store '+mystore);
    this.mystore.dispatch({type :LOADMOVIE_EFFECT,payload:''});
  	mystore.select('MainActionReducer')
  	       .subscribe( (state :State) => {
  	       	this.movies = state.movies
  	       });

  	     
  }


}
