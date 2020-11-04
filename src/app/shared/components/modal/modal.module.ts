import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModalComponent } from './modal.component';
import { ModalService } from './services/modal.service';
import { FocusTrapModule } from '../../directives/focus-trap/focus-trap.module';

@NgModule({
  imports: [CommonModule, FocusTrapModule],
  declarations: [ModalComponent],
  exports: [ModalComponent],
  providers: [ModalService],
})
export class ModalModule {}
