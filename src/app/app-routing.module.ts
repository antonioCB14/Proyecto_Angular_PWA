import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Categoria1Component } from './categoria1/categoria1.component';
import { Categoria2Component } from './categoria2/categoria2.component';
import { Categoria3Component } from './categoria3/categoria3.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {path: 'categoria1', component: Categoria1Component},
  {path: 'categoria2', component: Categoria2Component},
  {path: 'categoria3', component: Categoria3Component},
  {path: 'detail/:id', component: DetailComponent},
  {path: '**', redirectTo:'/categoria1', pathMatch: 'full'},
  {path: '', redirectTo:'/categoria1', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
