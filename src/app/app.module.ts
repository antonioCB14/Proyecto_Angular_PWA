import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ConsultasApiService } from "./consultas-api.service";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { Categoria1Component } from "./categoria1/categoria1.component";
import { Categoria2Component } from "./categoria2/categoria2.component";
import { Categoria3Component } from "./categoria3/categoria3.component";
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FooterComponent } from './footer/footer.component';
import { DetailComponent } from './detail/detail.component';
import { FiltroPipe } from './filtro.pipe';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    Categoria1Component,
    Categoria2Component,
    Categoria3Component,
    CabeceraComponent,
    FooterComponent,
    DetailComponent,
    FiltroPipe,
    
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })],
  providers: [ConsultasApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
