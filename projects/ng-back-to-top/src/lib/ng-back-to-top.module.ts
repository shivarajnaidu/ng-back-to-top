import { NgModule } from '@angular/core';
import { NgBackToTopComponent } from './ng-back-to-top/ng-back-to-top.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NgBackToTopComponent],
  imports: [
    CommonModule
  ],
  exports: [NgBackToTopComponent]
})
export class NgBackToTopModule { }
