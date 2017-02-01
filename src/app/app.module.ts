import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header.component';
import {AppComponent} from './app.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';


@NgModule({
  declarations : [
                  AppComponent,
        				  HeaderComponent
        				 
                 ],
  imports : [BrowserModule,FormsModule,ReactiveFormsModule,HttpModule],
  bootstrap : [AppComponent],
  providers: []

})
export class AppModule{}
