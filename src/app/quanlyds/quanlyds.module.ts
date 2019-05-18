import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuanlydsComponent } from '../quanlyds/quanlyds.component';

@NgModule({
  declarations: [QuanlydsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    QuanlydsComponent
  ]
})
export class QuanlydsModule { }
