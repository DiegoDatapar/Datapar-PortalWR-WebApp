import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'pwr-prime-ng-date-time-picker',
  templateUrl: './prime-ng-date-time-picker.component.html',
  styleUrls: ['./prime-ng-date-time-picker.component.css']
})
export class PrimeNgDateTimePickerComponent implements OnInit {

  @Input() name;
  ptbr: any;
  @Input() formGroup: FormGroup;

  constructor() { }

  ngOnInit() {
    this.ptbr = {
      closeText: 'Fechar',
      prevText: 'Anterior',
      nextText: 'Próximo',
      monthNames: ['Janeiro',
                   'Fevereiro',
                   'Março',
                   'Abril',
                   'Maio',
                   'Junho',
                   'Julho',
                   'Agosto',
                   'Setembro',
                   'Outubro',
                   'Novembro',
                   'Dezembro'],
      monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
      dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
      dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
      weekHeader: 'Semana',
      weekNumberTitle: 'Sm',
      firstDay: 0,
      isRTL: false,
      showMonthAfterYear: false,
      yearSuffix: '',
      timeOnlyTitle: 'Só Horas',
      timeText: 'Tempo',
      hourText: 'Hora',
      minuteText: 'Minuto',
      secondText: 'Segundo',
      currentText: 'Começo',
      ampm: false,
      month: 'Mês',
      week: 'Semana',
      day: 'Dia',
      allDayText: 'Todo o Dia',
      today: 'Hoje',
      clear: 'Limpar',
    }
  }
}
