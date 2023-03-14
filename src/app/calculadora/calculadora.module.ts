import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './calculadora/components';
import { CalculadoraService } from './calculadora/services';



@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CalculadoraComponent
  ],
  exports: [
    CalculadoraComponent
  ],
  providers: [
    CalculadoraService
  ]
})
export class CalculadoraModule { }
