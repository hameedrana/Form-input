import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'inputForm';
  currentInputType: string = 'text';
  currentInputClass: string = 'field-input';
  currentErrorClass: string = 'error-message';
  currentDropDownClass:string='selected-value';
  placeholderText: string = 'enter your text';
  errorMessage: string = 'This  field is required';
  receivedInputValue: string = '';// Holds the input value received from the child
  dropdownOptions: string[] = ['option 1', 'Option 2', 'Option 3', 'Option 4']; // Options array
  selectedOption: string = 'Option 1'; // To store the selected option
  autoSuggestDropDownOptions: string[] = ['Hameed', 'Saad','zeshan','moshin','bilal']
  autoSuggestInputValue: string = '';// Holds the autoSuggest input value received from the child
  datePickerInputValue: string = '';// Hold
  imageData: string[] = [];
  dataSource = ELEMENT_DATA;
  

  myForm:FormGroup
  
  constructor(){
    this.myForm = new FormGroup({
      textInput: new FormControl('', [Validators.required]),
      dropDownInput: new FormControl('', [Validators.required]),
      autoSuggestDropDown:new FormControl('', [Validators.required]),
      userImg:new FormControl('', [Validators.required]),
      datepicker:new FormControl('', [Validators.required]),
    });
   }
   get InputText(){
    return this.myForm.get('textInput')
  }
  displayImages(newValue: string[]): void {
    this.myForm.controls['userImg'].setValue(newValue)
    this.imageData = newValue;
  }
  datePicker(newValue: string): void {
    this.myForm.controls['datepicker'].setValue(newValue)
    this.datePickerInputValue=newValue
    
  }

  handleDropdownChange(newValue: string): void {
    this.myForm.controls['autoSuggestDropDown'].setValue(newValue)
    this.autoSuggestInputValue=newValue
  }


  handleSelectionChange(newValue: string): void {
    this.myForm.controls['dropDownInput'].setValue(newValue)
    this.selectedOption = newValue; // Update selected option
  }

  handleInputValueChange(newValue: string) {
    this.myForm.controls['textInput'].setValue(newValue) 
    this.receivedInputValue=newValue

  }

  placeholders() {
    if (this.currentInputType === 'text') {
      this.placeholderText = 'enter your text';
    } else if (this.currentInputType === 'number') {
      this.placeholderText = 'enter your number';
    } else if (this.currentInputType === 'password') {
      this.placeholderText = 'enter your password';
    } else if (this.currentInputType === 'email') {
      this.placeholderText = 'enter your email';
    }
  }
}
