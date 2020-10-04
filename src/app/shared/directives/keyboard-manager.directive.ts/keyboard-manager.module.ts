import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KeyboardManagerDirective } from './keyboard-manager.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [KeyboardManagerDirective],
  exports: [KeyboardManagerDirective],
})
export class KeyboardManagerModule {}
