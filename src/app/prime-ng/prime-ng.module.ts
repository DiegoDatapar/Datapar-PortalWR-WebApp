import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeNgDateTimePickerComponent } from './prime-ng-date-time-picker/prime-ng-date-time-picker.component';

@NgModule({
  declarations: [PrimeNgDateTimePickerComponent],
  imports: [
    CommonModule,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [PrimeNgDateTimePickerComponent]
})
export class PrimengModule { }
