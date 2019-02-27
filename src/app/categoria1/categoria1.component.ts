import { Component, OnInit } from "@angular/core";
import { ConsultasApiService } from "../consultas-api.service";

@Component({
  selector: "app-categoria1",
  templateUrl: "./categoria1.component.html",
  styleUrls: ["./categoria1.component.css"]
})
export class Categoria1Component implements OnInit {
  cervezas = [];
  cargando = true;
  indice = 1;
  recargando = false;
  sinDatos = false;
  constructor(private consulta: ConsultasApiService) {}
  ngOnInit() {
    this.cargarDatos(this.indice);
  }
  cargarDatos(index){
    this.consulta.cargarDatosPale(index).subscribe(data => {
      this.cervezas.push(data);
      this.cargando = false;
      this.recargando = false;
      if(data == ""){
        this.sinDatos = true;
      }
    });
  }
  cargarMas(){
    this.recargando = true;
    this.indice++;
    this.cargarDatos(this.indice);
  }
}
