import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KeyboardManagerDirective } from './keyboard-manager.directive';
import { KeyboardManagedItemDirective } from './keyboard-maneged-item.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [KeyboardManagerDirective, KeyboardManagedItemDirective],
  exports: [KeyboardManagerDirective, KeyboardManagedItemDirective],
})
export class KeyboardManagerModule {}
