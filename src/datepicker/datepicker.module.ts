import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DatePickerComponent } from './datepicker.component';

@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [DatePickerComponent],
    declarations: [DatePickerComponent],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DatePickerModule { }
