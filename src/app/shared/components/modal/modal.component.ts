import { Component } from '@angular/core';
import { ModalConfig } from './interfaces/modal-config';

@Component({
  selector: 'app-modal',
  styleUrls: ['./modal.component.scss'],
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  public config: ModalConfig;
}
