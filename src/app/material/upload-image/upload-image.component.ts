import { NgIf } from '@angular/common';
import { Component, ElementRef, Input,ViewChild,WritableSignal,forwardRef, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'app-upload-image',
  imports: [NgIf],
  templateUrl: './upload-image.component.html',
  styleUrl: './upload-image.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UploadImageComponent),
      multi: true,
    },
  ],

})
export class UploadImageComponent {
  imageUrl: WritableSignal<string | null> = signal(null);
  @Input({ transform: (value: string) => signal(value) }) buttonLabel: WritableSignal<string> = signal('Choose Image');
  private onChange: any = () => {};
  private onTouched: any = () => {};

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  writeValue(value: string | null): void {
    this.imageUrl.set(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    // You can disable the input element if needed
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.imageUrl.set(e.target.result);
        this.onChange(this.imageUrl()); // Notify Angular Forms
      };

      reader.readAsDataURL(file);
    } else {
      this.clearImage();
    }
  }

  onSelectUpload(): void {
    this.fileInput.nativeElement.click()
  }

  clearImage() {
    this.imageUrl.set(null);
    this.onChange(null); // Notify Angular Forms
  }
}
