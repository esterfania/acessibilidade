import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YesNoButtonGroupModule } from './shared/components/yes-no-button-group/yes-no-button-group.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DisabledControlModule } from './shared/directives/disabled-control/disabled-control.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YesNoButtonGroupModule,
    ReactiveFormsModule,
    DisabledControlModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
