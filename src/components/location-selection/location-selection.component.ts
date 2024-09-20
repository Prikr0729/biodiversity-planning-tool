import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-location-selection',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './location-selection.component.html',
  styleUrls: ['./location-selection.component.scss']
})
export class LocationSelectionComponent {
  selectedLat: number | null = null;
  selectedLng: number | null = null;
  inputLat: number | null = null;
  inputLng: number | null = null;
  locationMethod: string = 'manual';
  imageSrc: string | null = null;
  imageFile: File | null = null;

  constructor() {}

  toggleInputFields() {
    this.selectedLat = null;
    this.selectedLng = null;
    this.inputLat = null;
    this.inputLng = null;
    this.imageSrc = null; // Reset image when changing methods
    this.imageFile = null;
  }

  updateCoordinates() {
    if (this.inputLat !== null && this.inputLng !== null) {
      this.selectedLat = this.inputLat;
      this.selectedLng = this.inputLng;
    }
  }

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageSrc = reader.result as string;
      };
      reader.readAsDataURL(file);
      this.imageFile = file; // Store the file for uploading
    }
  }

  cancelImage() {
    this.imageSrc = null; // Clear the preview
    this.imageFile = null; // Clear the stored file
  }

  uploadImage() {
    // if (this.imageFile) {
    //   const formData = new FormData();
    //   formData.append('image', this.imageFile);

    //   // Replace 'your-api-endpoint' with your actual API endpoint
    //   this.http.post('your-api-endpoint', formData).subscribe(
    //     response => {
    //       console.log('Upload successful:', response);
    //       // Handle success (e.g., show a message, clear fields, etc.)
    //     },
    //     error => {
    //       console.error('Upload failed:', error);
    //       // Handle error (e.g., show an error message)
    //     }
    //   );
    // } else {
    //   console.error('No file selected for upload.');
    // }
  }
}
