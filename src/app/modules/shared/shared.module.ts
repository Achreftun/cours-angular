import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetCharPipe } from './get-char.pipe';



@NgModule({
  declarations: [
    GetCharPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GetCharPipe
  ]
})
export class SharedModule { }
