import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss'],
})
export class DropDownComponent {
  @Input() options: string[] | null = []; // Receive options as input
  @Input() dropdownClass: string = ''; // Receive class as input
  @Input() errorClass: string = '';
  @Input() errorMessage: string = 'This  field is required';
  @Input() showError: boolean = false;

  @Output() selectionChange: EventEmitter<string> = new EventEmitter<string>();

  selectedOption: string = ''; // Store the selected option

  constructor() {}
  // Emit the selected option when user selects an option
  onOptionSelect(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const optionValue = selectElement.value;
    this.selectedOption = optionValue;
    this.selectionChange.emit(this.selectedOption);
  }
}
