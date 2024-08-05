import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { InputFieldsModule } from './form-fields/input-fields.module';
import { InputTextComponent } from './form-fields/input-text/input-text.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropDownComponent } from './form-fields/drop-down/drop-down.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutocompleteInputComponent } from './form-fields/autocomplete-input/autocomplete-input.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { UploadFileComponent } from './form-fields/upload-file/upload-file.component';
import { DatePickerComponent } from './form-fields/date-picker/date-picker.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import { TableInputComponent } from './form-fields/table-input/table-input.component';

@NgModule({
  declarations: [
    AppComponent,
    InputTextComponent,
    DropDownComponent,
    AutocompleteInputComponent,
    UploadFileComponent,
    DatePickerComponent,
    TableInputComponent,

    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    InputFieldsModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
