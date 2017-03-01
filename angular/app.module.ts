import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {TodosComponent} from './components/todos/todos.component';
import {MdComponent} from './components/md/md.component';

import {AppRoutingModule} from './app.routing';


@NgModule({
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      AppRoutingModule
  ],
  declarations: [
      AppComponent,
      TodosComponent,
      MdComponent
  ],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule{}
