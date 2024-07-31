import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  imageData: string | ArrayBuffer | null = null;

  myForm:FormGroup
  
  constructor(){
    this.myForm = new FormGroup({
      textInput: new FormControl('', [Validators.required]),
      dropDownInput: new FormControl('', [Validators.required]),
      autoSuggestDropDown:new FormControl('', [Validators.required]),
      userImg:new FormControl('', [Validators.required]),
       
    });
   }
   get InputText(){
    return this.myForm.get('textInput')
  }
  displayImage(newValue: string | ArrayBuffer | null): void {
    this.myForm.controls['userImg'].setValue(newValue)
    this.imageData = newValue;
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
