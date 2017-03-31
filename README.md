# ng2-datepicker-bootstrap
Datepicker component to angular2

Hello everyone!
This repository will be added to the datepicker component for use with angular 2.
I'll try to update it whenever possible.
I would like to inform you that it was created based on the repository of https://github.com/jkuri/ng2-datepicker, due to being too long without update decided to create this repository and go updating.

Below the operating instructions.

## Installation

To install this library, run:

```bash
$ npm install ng2-datepicker-bootstrap --save
```

## Use Example:

```ts
import {DatePickerModule} from 'ng2-datepicker-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [...],
    imports: [
        //... you others modules
        DatePickerModule,
        FormsModule
    ],
    providers: [...]
})
export class AppModule {}
```


### Using 

```html  
  <datepicker [(ngModel)]="model.firstDate" [viewFormat]="'DD/MM/YYYY'" [modelFormat]="'YYYY-MM-DD'"  [id]="'firstDate'" [label]="'To'"></datepicker>
```

Available options: 

 * `viewFormat` - Date format to display in the view. (default: `'DD/MM/YYYY'`) 
 * `modelFormat` - Date format of the calendar. This will be bound to the model as the date's value. (default: `'YYYY-MM-DD'`) 
 * `id` - Identify your attribute 
 * `label` -  Label display name
 * `firstWeekdaySunday` -  Set to `'true'` to set first day of the week in calendar to Sunday instead of Monday.
 * `opened` - Set to `true` to open the calendar by default

 ## Questions? Open a Issue!
