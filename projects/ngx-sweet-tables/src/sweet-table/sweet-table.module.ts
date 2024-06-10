import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SweetTablesComponent } from './sweet-tables/sweet-tables.component';



@NgModule({
  declarations: [
    SweetTablesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [SweetTablesComponent]
})
export class SweetTableModule { }
