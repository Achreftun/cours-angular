import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetCharPipe } from './get-char.pipe';
import { EvenValuePipe } from './even-value.pipe';
import { StrToArrayPipe } from './str-to-array.pipe';



@NgModule({
  declarations: [
    GetCharPipe,
    EvenValuePipe,
    StrToArrayPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GetCharPipe,
    EvenValuePipe
  ]
})
export class SharedModule { }
