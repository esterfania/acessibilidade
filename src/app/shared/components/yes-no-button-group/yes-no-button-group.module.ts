import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YesNoButtonGroupComponent } from './yes-no-button-group.component';
import { KeyboardManagerModule } from '../../directives/keyboard-manager.directive.ts/keyboard-manager.module';
import { DisabledControlModule } from '../../directives/disabled-control/disabled-control.module';

@NgModule({
  declarations: [YesNoButtonGroupComponent],
  imports: [CommonModule, KeyboardManagerModule],
  exports: [YesNoButtonGroupComponent],
})
export class YesNoButtonGroupModule {}
