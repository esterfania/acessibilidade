import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DisabledControlDirective } from './disabled-control.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [DisabledControlDirective],
  exports: [DisabledControlDirective],
})
export class DisabledControlModule {}
