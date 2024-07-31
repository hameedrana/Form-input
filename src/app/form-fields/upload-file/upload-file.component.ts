import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent {
  @Input() errorClass: string = '';
  @Input() errorMessage: string = 'This  field is required';
  @Input() showError: boolean = false;
  @Output() imageSelected = new EventEmitter<string | ArrayBuffer | null>();
  imageData: string | ArrayBuffer | null = null;
  
  constructor(){
    console.log(this.showError);
  }
  
  
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.imageData = reader.result;
        this.imageSelected.emit(this.imageData);
       
      };

      reader.readAsDataURL(file);
    }
  }
}
