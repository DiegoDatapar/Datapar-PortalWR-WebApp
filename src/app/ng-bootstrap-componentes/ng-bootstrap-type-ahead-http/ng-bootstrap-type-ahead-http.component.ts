import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AutoCompleteService } from 'src/app/comum/servicos/auto-complete.service';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap, switchMap, catchError } from 'rxjs/operators';
import { NgbTypeaheadSelectItemEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'pwr-ng-bootstrap-type-ahead-http',
  templateUrl: './ng-bootstrap-type-ahead-http.component.html',
  styleUrls: ['./ng-bootstrap-type-ahead-http.component.css']
})
export class NgBootstrapTypeAheadHttpComponent implements OnInit {

  @Input() name: string;
  @Input() model: any;
  @Input() api = '';
  @Input() bindinghighlight;
  @Input() formatter;
  @Output() itemSelecionado = new EventEmitter<any>();
  @Output() focado = new EventEmitter<boolean>();
  @Input() focoinicial: boolean = false;

  searching = false;
  searchFailed = false;

  constructor(private service: AutoCompleteService) { }

  ngOnInit() {
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      tap(() => {
        if (this.model.length > 2) {
          this.searching = true;

        }

        this.itemSelecionado.emit(null);
      }),
      switchMap(term =>
        term.length > 2 ?

          this.service.Filtrar(term, this.api).pipe(
            tap(() => this.searchFailed = false),
            catchError(() => {
              this.searchFailed = true;
              return of([]);
            })) : []
      ),
      tap(() => this.searching = false)
    )


  itemSelecionadoInterno(evento: NgbTypeaheadSelectItemEvent) {
    this.itemSelecionado.emit(evento.item);
  }

  onFocus() {
    this.focado.emit(true);
  }

  onBlur() {
    this.focado.emit(false);
  }

}
