# ng-back-to-top
Angular 2+ Back To Top Button Component

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://paypal.me/shivarajnaidu)

( This Library Is Using Angular CLI's Library Generation Command )

## How to:

### Install npm 
```
   npm install ng-back-to-top --save
```

### Simple Example

#### Import Module

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgBackToTopModule } from 'ng-back-to-top';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgBackToTopModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

#### Use Component
```html
<div>
  <ng-back-to-top bgColor="orange"></ng-back-to-top>
</div>
```

## API

### input property

`color` property is available to change the color of default button arrow

`bgColor` this property can change the background color of back to top button

## Any contributions are appreciated.
[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://paypal.me/shivarajnaidu)