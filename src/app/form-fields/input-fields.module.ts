import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgFor, AsyncPipe} from '@angular/common';




@NgModule({
  declarations: [
  
  

  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    FormsModule,
  
    NgFor,
    AsyncPipe,
  ],

})
export class InputFieldsModule { }
