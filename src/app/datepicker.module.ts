import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {DatePickerComponent} from './datepicker.component';

export {DatePickerOptionsItem} from './calendar-itens.model';
export {DatePickerOptions} from './datepicker.component';

@NgModule({
  declarations: [DatePickerComponent],
  imports: [CommonModule, FormsModule],
  exports: [DatePickerComponent]
})
export class DatePickerModule {
}
