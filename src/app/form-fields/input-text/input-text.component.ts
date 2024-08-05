import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
})
export class InputTextComponent {
  @Input() inputType: string = 'text';
  @Input() inputClass: string = '';
  @Input() errorClass: string = '';
  @Input() errorMessage: string = 'This  field is required';
  @Input() placeHolder: string = '';
  @Input() textInputType: any = '';
  @Input() showError: boolean = false;
  @Output() inputValueChange: EventEmitter<string> = new EventEmitter<string>();
  inputValue: string = ''; // Holds the input value

  constructor() {}

  onInputChange() {
    this.inputValueChange.emit(this.inputValue);
  }
}
