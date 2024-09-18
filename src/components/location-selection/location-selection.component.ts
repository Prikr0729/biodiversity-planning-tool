import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

  toggleInputFields() {
    this.selectedLat = null;
    this.selectedLng = null;
    this.inputLat = null;
    this.inputLng = null;
  }

  updateCoordinates() {
    if (this.inputLat !== null && this.inputLng !== null) {
      this.selectedLat = this.inputLat;
      this.selectedLng = this.inputLng;
    }
  }
}
