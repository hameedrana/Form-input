import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent {
  @Input() errorClass: string = '';
  @Input() errorMessage: string = 'This  field is required';
  @Input() showError: boolean = false;
  @Output() selectionChange: EventEmitter<string> = new EventEmitter<string>();
  selectedDate: string = ''; // Store the selected option

  onInputChange() {
    this.selectionChange.emit(this.selectedDate);
  }

  getValue(value: string) {
    this.selectedDate = value;
    this.selectionChange.emit(this.selectedDate);
  }

  onOptionSelect(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const optionValue = selectElement.value;
    this.selectedDate = optionValue;
    this.selectionChange.emit(this.selectedDate);
  }
}
