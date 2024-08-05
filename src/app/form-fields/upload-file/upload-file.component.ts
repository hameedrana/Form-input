import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss'],
})
export class UploadFileComponent {
  @Input() errorClass: string = '';
  @Input() errorMessage: string = 'This  field is required';
  @Input() showError: boolean = false;
  @Output() imagesSelected = new EventEmitter<string[]>();
  imageData: string[] = [];

  constructor() {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files) {
      this.imageData = [];
      const files: FileList = input.files;

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = () => {
          if (reader.result) {
            this.imageData.push(reader.result as string);

            // Emit the imageData once all files are read
            if (this.imageData.length === files.length) {
              this.imagesSelected.emit(this.imageData);
            }
          }
        };

        reader.readAsDataURL(file);
      }
    }
  }
}
