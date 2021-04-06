import { Usuario } from './../models/usuario.model';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'desafio-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit, OnChanges {
  
  @Input() valorInicial: number = 8;
  @Input() exibirTabelaUsuarios: boolean = false;
  @Output() mensagemRetornoUsuariosEvent = new EventEmitter<string>();
 
  displayedColumnsUsuarios: string[] = ['id', 'name', 'email'];
  dataSource:  Observable<Usuario[]>;;
  
  constructor(private usuariosService: UsuariosService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.exibirTabelaUsuarios?.currentValue) {
      this.exibirTabelaUsuarios = false;
      this.mensagemRetornoUsuariosEvent.emit("");
    }
    else {
      this.getUsuarios();
    }
  }
  
  getUsuarios() {
    this.usuariosService.getUsuarios(this.valorInicial).subscribe((data: any) => {
      this.dataSource = data;
      this.mensagemRetornoUsuariosEvent.emit(`Foram retornados ${data.length} usuários`);
    }, (error) => {
      this.mensagemRetornoUsuariosEvent.emit(error);
    });
  }

  ngOnInit(): void {
  }
}