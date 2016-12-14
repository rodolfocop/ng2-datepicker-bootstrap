import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DataPickerComponent } from './datepicker.component';

@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [DataPickerComponent],
    declarations: [DataPickerComponent],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DataPickerModule { }
