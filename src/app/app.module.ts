import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { NewserveService } from './newserve.service';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [NewserveService],
  bootstrap: [AppComponent ,AddComponent]
})
export class AppModule { }
