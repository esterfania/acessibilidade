import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'acessibilidade';
  public yesNoAnswer = 'no';
  public label = 'Are you good enough in Angular?';
  form: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      yesNoAnswer: [this.yesNoAnswer, [Validators.required]],
    });
  }

  public submit(): void {
    console.log(this.form.value);
  }
}
