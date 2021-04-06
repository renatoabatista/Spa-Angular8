import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'desafio-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mensagemRetornoFotos: any;
  mensagemRetornoUsuarios: any;

  constructor() { }

  ngOnInit(): void {
    this.valorUsuarios = 0;
    this.valorFotos = 0;
  }

  valorUsuarios: number;
  valorFotos: number;
  exibeTabelaUsuarios: boolean = false;
  exibeTabelaFotos: boolean = false;

  incrementarUsuario() {
    if (this.valorUsuarios >= 0 && this.valorUsuarios < 10)
      this.valorUsuarios++;
    this.exibeTabelaUsuarios = false;
    if (this.valorUsuarios >= 10){
      this.mensagemRetornoUsuarios = "Valor máximo permitido é 10";
    }
  }

  decrementarUsuario() {
    if (this.valorUsuarios > 0)
      this.valorUsuarios--;
    this.exibeTabelaUsuarios = false;
    if (this.valorUsuarios < 10){
      this.mensagemRetornoUsuarios = "";
    }
  }

  exibirTabelaUsuario() {
    this.exibeTabelaUsuarios = true;
  }

  exibirTabelaFoto() {
    this.exibeTabelaFotos = true;
  }

  incrementarFoto() {
    this.valorFotos++;
    this.exibeTabelaFotos = false;
  }

  decrementarFoto() {
    if (this.valorFotos > 0)
      this.valorFotos--;
    this.exibeTabelaFotos = false;
  }

  exibirMensagemFotos(event: any) {
    this.mensagemRetornoFotos = event;
  }

  exibirMensagemUsuarios(event: any) {
    this.mensagemRetornoUsuarios = event;
  }
}
