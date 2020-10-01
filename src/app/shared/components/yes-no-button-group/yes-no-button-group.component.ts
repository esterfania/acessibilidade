import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const VALUE_ACESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => YesNoButtonGroupComponent),
  multi: true,
};

@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.scss'],
  providers: [VALUE_ACESSOR],
})
export class YesNoButtonGroupComponent implements OnInit, ControlValueAccessor {
  @Input() public label = '';
  @Input() public value: string = null;
  @Input() isReadOnly = false;
  @Output() valueChange = new EventEmitter<string>();
  
  public options = YesNoButtonGroupOptions;
  public onChange = (value: string) => {};
  public onTouched = () => {};
  
  constructor() {}

  public writeValue(value: string): void {
    this.value = value;
    this.onChange(this.value);
  }
  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }
  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  public setDisabledState?(isDisabled: boolean): void {
    this.isReadOnly = isDisabled;
  }

  ngOnInit(): void {}

  public activate(value: string) {
    this.value = value;
    this.valueChange.emit(this.value);
  }
}
enum YesNoButtonGroupOptions {
  YES = 'yes',
  NO = 'no',
}
