import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pwr-navegacao-superior',
  templateUrl: './navegacao-superior.component.html',
  styleUrls: ['./navegacao-superior.component.css']
})
export class NavegacaoSuperiorComponent implements OnInit {

  // constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  Sair() {
    // this.authService.Sair();
    // this.router.navigate(['login']);
  }

}
