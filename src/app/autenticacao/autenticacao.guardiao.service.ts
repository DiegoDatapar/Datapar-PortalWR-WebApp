import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacaoService } from './autenticacao.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoGuardiaoService implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    boolean | Observable<boolean> | Promise<boolean> {
    const autenticado = this.autenticacaoService.Autenticado();

    if (autenticado === false) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

  constructor(private autenticacaoService: AutenticacaoService, private router: Router) { }
}
