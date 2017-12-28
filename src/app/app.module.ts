import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MainActionReducer } from './actionreducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { MainEffects } from './main-effects.service';
import {MdInputModule} from '@angular/material';
import {MdListModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; 
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule} from '@angular/material';
import {MdSelectModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MdInputModule,
    MdSelectModule,
    MdListModule,
    MdButtonModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    StoreModule.provideStore({MainActionReducer}),
   EffectsModule.run(MainEffects)

  ],
  providers: [MainEffects],
  bootstrap: [AppComponent]
})
export class AppModule { }
