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
import {Component} from '@angular/core';
import {FORM_DIRECTIVES} from '@angular/forms/index';
import {DatePicker} from 'ng2-datepicker-bootstrap';

class Test {
  date: Date;
}

@Component({
  template: `
   <datepicker [(ngModel)]="test.date" [viewFormat]="'DD/MM/YYYY'" model-format="YYYY-MM-DD" init-date="2017-05-12" name="dateInitial"></datepicker>
  `,
  directives: [DatePicker, FORM_DIRECTIVES]
})

class App {
  test: Test;

  constructor() {
    this.test = Test();
  }
}
```

Update the system.config
```
var map = {
	....
	'ng2-datepicker-bootstrap': 'node_modules/ng2-datepicker-bootstrap/dist'
};
var packages = {
	'ng2-datepicker-bootstrap': { main: 'index.js', defaultExtension: 'js' },
}
```

## Development

To generate all `*.js`, `*.js.map` and `*.d.ts` files:
```bash
$ npm run tsc
```
To lint all `*.ts` files:
```bash
$ npm run lint
```

## License

The MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
