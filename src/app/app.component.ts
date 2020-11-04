import {
  AfterViewInit,
  Component,
  ViewChild,
  TemplateRef,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalRef } from './shared/components/modal/models/modal-ref';
import { ModalService } from './shared/components/modal/services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  label = 'Are you good enough in Angular?';
  form: FormGroup;
  formModal: FormGroup;
  @ViewChild('modal') modalTemplateRef: TemplateRef<any>;
  modalRef: ModalRef;
  constructor(formBuilder: FormBuilder, private modalService: ModalService) {
    this.form = formBuilder.group({
      yesNoAnswer: [
        {
          value: null,
          disabled: true,
        },
      ],
    });

    this.formModal = formBuilder.group({
      firstName: ['Ester', Validators.required],
      surname: ['', Validators.required],
      age: ['', Validators.required],
    });
  }

  submit(): void {}
  submitModal(): void {
    console.log(this.formModal.getRawValue());
  }
  showModal(): void {
    this.modalRef = this.modalService.open({
      templateRef: this.modalTemplateRef,
      title: 'modal interativo',
    });
  }
}
