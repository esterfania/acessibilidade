import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { UniqueIdService } from '../../services/unique-id/unique-id.service';

const VALUE_ACESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => YesNoButtonGroupComponent),
  multi: true,
};

@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.scss'],
  providers: [VALUE_ACESSOR, UniqueIdService],
})
export class YesNoButtonGroupComponent implements ControlValueAccessor {
  @Input() label = '';
  @Input() value: string = null;
  @Input() disabled = false;
  @Input() isReadOnly = false;
  @Output() valueChange = new EventEmitter<string>();
  id: string = null;
  options = YesNoButtonGroupOptions;
  onChange = (value: string) => {};
  onTouched = () => {};

  constructor(private uniqueIdService: UniqueIdService) {
    this.id = this.uniqueIdService.generateUniqueIdWithPrefix(
      'yes-no-button-group'
    );
  }

  writeValue(value: string): void {
    this.value = value;
    this.onChange(this.value);
    this.valueChange.emit(this.value);
  }
  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  activate(value: string) {
    this.writeValue(value);
  }
}
enum YesNoButtonGroupOptions {
  YES = 'yes',
  NO = 'no',
}
