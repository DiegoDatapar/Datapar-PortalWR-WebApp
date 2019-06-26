import { Component, OnInit, OnChanges, Input, ViewChild, Injector, forwardRef } from '@angular/core';
import { FormGroup, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgbDatepicker, NgbPopover, NgbPopoverConfig, NgbDatepickerConfig, NgbTimeStruct, NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';
import { noop } from 'rxjs';
import { DatePipe } from '@angular/common';
import { DateTimeModel } from './date-time-model';
import { CustomDatepickerI18n, I18n } from './date-timer-configuracao-regiao';

@Component({
  selector: 'pwr-ng-bootstrap-date-time-picker',
  templateUrl: './ng-bootstrap-date-time-picker.component.html',
  styleUrls: ['./ng-bootstrap-date-time-picker.component.css'],
  providers: [
    DatePipe,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgBootstrapDateTimePickerComponent),
      multi: true
    },
    I18n, {provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n}
  ],
})

export class NgBootstrapDateTimePickerComponent implements OnInit, OnChanges {

  focado: boolean;

  @Input() name: string;
  @Input() form: FormGroup;

  @Input()
  dateString: string;

  @Input()
  inputDatetimeFormat = 'dd/MM/yyyy HH:mm:ss';
  @Input()
  hourStep = 1;
  @Input()
  minuteStep = 15;
  @Input()
  secondStep = 30;
  @Input()
  seconds = true;

  @Input()
  disabled = false;

  private showTimePickerToggle = false;

  private datetime: DateTimeModel = new DateTimeModel();
  private firstTimeAssign = true;

  @ViewChild(NgbDatepicker)
  private dp: NgbDatepicker;

  @ViewChild(NgbPopover)
  private popover: NgbPopover;

  private onTouched: () => void = noop;
  private onChange: (_: any) => void = noop;

  private ngControl: NgControl;

  constructor(private config: NgbPopoverConfig, private inj: Injector, configDate: NgbDatepickerConfig) {
    config.autoClose = 'outside';
    config.placement = 'auto';
    configDate.firstDayOfWeek = 7;
  }

  ngOnInit(): void {
    this.ngControl = this.inj.get(NgControl);
  }
  ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
    let valor = this.form.get(this.name).value;
    if (valor == null) {
      return;
    }

    let data = new Date(valor);

    this.datetime.day = data.getDate();
    this.datetime.month = data.getMonth() + 1;
    this.datetime.year = data.getFullYear();
    this.datetime.hour = data.getHours();
    this.datetime.minute = data.getMinutes();
    this.datetime.second = data.getSeconds();

    this.setDateStringModel();

  }

  ngAfterViewInit(): void {
    this.popover.hidden.subscribe($event => {
      this.showTimePickerToggle = false;
    });
  }

  writeValue(newModel: string) {
    if (newModel) {
      this.datetime = Object.assign(this.datetime, DateTimeModel.fromLocalString(newModel));
      this.dateString = newModel;
      this.setDateStringModel();
    } else {
      this.datetime = new DateTimeModel();
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  toggleDateTimeState($event) {
    this.showTimePickerToggle = !this.showTimePickerToggle;
    $event.stopPropagation();
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInputChange($event: any) {
    const value = $event.target.value;
    const dt = DateTimeModel.fromLocalString(value);

    if (dt) {
      this.datetime = dt;
      this.setDateStringModel();
    } else if (value.trim() === '') {
      this.datetime = new DateTimeModel();
      this.dateString = '';
      this.onChange(this.dateString);
    } else {
      this.onChange(value);
    }
  }

  onDateChange($event) {
    if ($event.year) {
      $event = `${$event.year}-${$event.month}-${$event.day}`
    }

    const date = DateTimeModel.fromLocalString($event);

    if (!date) {
      this.dateString = this.dateString;
      return;
    }

    if (!this.datetime) {
      this.datetime = date;
    }

    this.datetime.year = date.year;
    this.datetime.month = date.month;
    this.datetime.day = date.day;

    this.dp.navigateTo({ year: this.datetime.year, month: this.datetime.month });
    this.setDateStringModel();
  }

  onTimeChange(event: NgbTimeStruct) {
    this.datetime.hour = event.hour;
    this.datetime.minute = event.minute;
    this.datetime.second = event.second;

    this.setDateStringModel();
  }

  setDateStringModel() {
    this.dateString = this.datetime.toString();

    if (!this.firstTimeAssign) {
      this.onChange(this.dateString);
    } else {
      // Skip very first assignment to null done by Angular
      if (this.dateString !== null) {
        this.firstTimeAssign = false;
      }
    }
  }

  inputBlur($event) {
    this.onTouched();
  }

  hoje() {

    let data = new Date();

    this.datetime.day = data.getDate();
    this.datetime.month = data.getMonth() + 1;
    this.datetime.year = data.getFullYear();
    this.datetime.hour = data.getHours();
    this.datetime.minute = data.getMinutes();
    this.datetime.second = data.getSeconds();

    this.setDateStringModel();
    this.popover.close();
  }

}
