import { Component, OnInit, Output, EventEmitter, OnChanges, SimpleChanges, Input } from '@angular/core';
import { NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'pwr-ng-bootstrap-date-picker-range',
  templateUrl: './ng-bootstrap-date-picker-range.component.html',
  styleUrls: ['./ng-bootstrap-date-picker-range.component.css']
})
export class NgBootstrapDatePickerRangeComponent implements OnInit {

  hoveredDate: NgbDate;

  fromDate: NgbDate;
  toDate: NgbDate;

  @Input() dataIniSelecionada: string;
  @Input() dataFimSelecionada: string;
  @Output() rangeAlterada = new EventEmitter<any>();

  constructor(calendar: NgbCalendar) {
  }

  onDateSelection(date: NgbDate) {

    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }

    let dataInicio = null;
    let dataFim = null;

    if (this.fromDate != null) {
      dataInicio = new Date(this.fromDate.year, (this.fromDate.month - 1), this.fromDate.day).toDateString();
    }

    if (this.toDate != null) {
      dataFim = new Date(this.toDate.year, (this.toDate.month - 1), this.toDate.day).toDateString();
    }

    const range = { inicio: dataInicio, fim: dataFim };

    this.rangeAlterada.emit(range);

  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes['dataIniSelecionada'] != undefined && changes['dataIniSelecionada'].isFirstChange()) {

      const data = new Date(changes['dataIniSelecionada'].currentValue);
      this.fromDate = new NgbDate(data.getFullYear(), data.getMonth(), data.getDay());

    }

    if (changes['dataFimSelecionada'] != undefined && changes['dataFimSelecionada'].isFirstChange()) {

      const data = new Date(changes['dataFimSelecionada'].currentValue);
      this.toDate = new NgbDate(data.getFullYear(), data.getMonth(), data.getDay());

    }
  }

}
