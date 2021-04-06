import { Observable } from 'rxjs';
import { Foto } from './../models/foto.model';
import { FotosService } from './../services/fotos.service';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'desafio-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit, OnChanges {

  @Input() valorInicial: number = 10;
  @Input() exibirTabelaFotos: boolean = false;
  @Output() mensagemRetornoFotosEvent = new EventEmitter<string>();;

  displayedColumnsFotos: string[] = ['id', 'title', 'thumbnailUrl'];
  dataSource: Observable<Foto[]>;

  constructor(private fotosService: FotosService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.exibirTabelaFotos?.currentValue) {
      this.exibirTabelaFotos = false;
      this.mensagemRetornoFotosEvent.emit("");
    }
    else {
      this.getFotos();
    }
  }

  ngOnInit(): void {
  }

  getFotos() {
    this.fotosService.getFotos(this.valorInicial).subscribe((data: any) => {
      this.dataSource = data;
      this.mensagemRetornoFotosEvent.emit(`Foram retornadas ${data.length} fotos`);
    }, (error) => {
      this.mensagemRetornoFotosEvent.emit(error);
    });
  }
}
