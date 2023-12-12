import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  nombre: string = '';

  constructor(private wsService: WebsocketService) {}

  ngOnInit() {}

  ingresar() {
    this.wsService.loginWS(this.nombre);
  }

}