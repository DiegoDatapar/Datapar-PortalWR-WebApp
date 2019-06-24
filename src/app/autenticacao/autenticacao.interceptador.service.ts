import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AutenticacaoService } from './autenticacao.service';
import { Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoInterceptadorService implements HttpInterceptor {

  constructor(private autenticacaoService: AutenticacaoService, private modalService: NgbModal,  private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.autenticacaoService.Autenticado()) {
      const token: string = this.autenticacaoService.obterToken();

      const expiracao: Date = new Date(this.autenticacaoService.obterExpiracao());
      const agora: Date = new Date();

      if (expiracao < agora) {
        this.Sair();
      }

      req = req.clone({
        setHeaders: {
          'Authorization': 'Bearer ' + token
        }
      });
    }

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {

        if (error.status == 401) {
          this.Sair();
        }
        return throwError(error);
    }));

  }

  Sair() {
    this.modalService.dismissAll();
    this.autenticacaoService.Sair();
    this.router.navigate(['login'], { state: { expired: true } });
  }
}
