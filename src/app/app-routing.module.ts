import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InicioComponent} from './inicio/inicio/inicio.component';
import {QuienesSomosComponent} from './nosotros/quienes-somos/quienes-somos.component';
import {TratamientosComponent} from './tratamientos/tratamientos/tratamientos.component';
import {PromocionesComponent} from './promociones/promociones/promociones.component';
import {ContactosComponent} from './contactos/contactos/contactos.component';
import {CommonModule} from '@angular/common';
import {TratamientosCorporalesComponent} from './tratamientos/tratamientos-corporales/tratamientos-corporales.component';
import {TratamientosFacialesComponent} from './tratamientos/tratamientos-faciales/tratamientos-faciales.component';
import {TratamientosRelajacionComponent} from './tratamientos/tratamientos-relajacion/tratamientos-relajacion.component';


const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'quienesSomos', component: QuienesSomosComponent },
  { path: 'tratamientos', component: TratamientosComponent },
  { path: 'tratamientosCorporales', component: TratamientosCorporalesComponent },
  { path: 'tratamientosFaciales', component: TratamientosFacialesComponent },
  { path: 'tratamientosRelajacion', component: TratamientosRelajacionComponent },
  { path: 'promociones', component: PromocionesComponent },
  { path: 'contacto', component: ContactosComponent },
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
