import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ConsultasApiService {

  constructor(private http: HttpClient) {}
  cargarBeer(id) {
    return this.http.get("https://api.punkapi.com/v2/beers/"+id);
  }
  cargarDatosPale(indicePale1) {
    return this.http.get("https://api.punkapi.com/v2/beers?malt=extra_pale&page="+indicePale1+"&per_page=8");
  }
  cargarDatosAmber(indiceAmbar) {
    return this.http.get("https://api.punkapi.com/v2/beers?malt=Amber&page="+indiceAmbar+"&per_page=8");
  }
  cargarDatosRoasted(indiceRoasted) {
    return this.http.get("https://api.punkapi.com/v2/beers?malt=Roasted_Barley&page="+indiceRoasted+"&per_page=8");
  }
}
