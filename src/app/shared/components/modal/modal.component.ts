import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  HostBinding,
} from '@angular/core';
import { fade } from '../../animations/fade';
import { ModalConfig } from './interfaces/modal-config';
import { fadeOut } from '../../animations/fadeOut';
import { ModalRef } from './models/modal-ref';

@Component({
  selector: 'app-modal',
  styleUrls: ['./modal.component.scss'],
  templateUrl: './modal.component.html',
  animations: [fade, fadeOut],
})
export class ModalComponent {
  @HostBinding('@fade') fade = true;
  @HostBinding('@fadeOut') fadeOut = true;
  config: ModalConfig;
  modalRef: ModalRef;
  constructor(private cdr: ChangeDetectorRef) {}
}
