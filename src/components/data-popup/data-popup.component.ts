import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-data-popup',
  standalone: true,
  imports: [],
  templateUrl: './data-popup.component.html',
  styleUrl: './data-popup.component.scss'
})
export class DataPopupComponent {
  @Input() responseData: any = null;
  @Output() closeModal: EventEmitter<void> = new EventEmitter();

  close() {
    this.closeModal.emit();
  }
}
