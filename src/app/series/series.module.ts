import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Listar_seriesComponent } from './listar_series/listar_series.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Listar_seriesComponent],
  exports: [Listar_seriesComponent]
})
export class SeriesModule { }
