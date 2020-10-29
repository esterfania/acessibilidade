import { Component } from '@angular/core';
import { fade } from '../../animations/fade';
import { ModalConfig } from './interfaces/modal-config';

@Component({
  selector: 'app-modal',
  styleUrls: ['./modal.component.scss'],
  templateUrl: './modal.component.html',
  animations: [fade],
})
export class ModalComponent {
  public config: ModalConfig;
}
