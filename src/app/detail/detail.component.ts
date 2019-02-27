import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsultasApiService } from "../consultas-api.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  cervezaUnica: Object;
  error = false;
  cargando = true;
  constructor(private route: ActivatedRoute, private consulta: ConsultasApiService) { }

  ngOnInit() {
    const beerId = this.route.snapshot.paramMap.get("id");
    this.consulta.cargarBeer(beerId).subscribe(data => {
      this.cervezaUnica = data[0];
      this.cargando = false;
    },error => {
      this.error = true;
    })
  }
}
