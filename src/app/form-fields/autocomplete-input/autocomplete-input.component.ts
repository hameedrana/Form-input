import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-autocomplete-input',
  templateUrl: './autocomplete-input.component.html',
  styleUrls: ['./autocomplete-input.component.scss']
})
export class AutocompleteInputComponent implements OnInit{
  myControl = new FormControl('');
  @Input() options: string[] = [];
  @Input() errorClass: string = '';
  @Input() errorMessage: string = 'This  field is required';
  @Input() showError: boolean = false;
  @Output() selectionChange: EventEmitter<string> = new EventEmitter<string>();
  filteredOptions!: Observable<string[]>;
  selectedOption: string = ''; // Store the selected option
  constructor(){}
  onInputChange() {
    this.selectionChange.emit(this.selectedOption);
   
    
  }
  getValue(value: string) {
    this.selectedOption = value;
    this.selectionChange.emit(this.selectedOption);
    
  }
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
   return this.options.filter(option => option.toLowerCase().includes(filterValue));

  }
  onOptionSelect(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const optionValue = selectElement.value;
    this.selectedOption = optionValue;
    this.selectionChange.emit(this.selectedOption);
    
  }
}
