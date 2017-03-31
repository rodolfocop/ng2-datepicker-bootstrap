import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {DatePickerComponent} from './datepicker.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [DatePickerComponent],
  declarations: [DatePickerComponent]
})
export class DatePickerModule {
}
