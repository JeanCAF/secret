import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './templates/menu/menu.component';
import { InicioComponent } from './inicio/inicio/inicio.component';
import { QuienesSomosComponent } from './nosotros/quienes-somos/quienes-somos.component';
import { TratamientosComponent } from './tratamientos/tratamientos/tratamientos.component';
import { ContactosComponent } from './contactos/contactos/contactos.component';
import { PromocionesComponent } from './promociones/promociones/promociones.component';
import {AngularMaterialModule} from './angular-material-module';
import { SidenavListComponent } from './templates/sidenav-list/sidenav-list.component';
import {LayoutModule} from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TratamientosCorporalesComponent } from './tratamientos/tratamientos-corporales/tratamientos-corporales.component';
import { TratamientosFacialesComponent } from './tratamientos/tratamientos-faciales/tratamientos-faciales.component';
import { TratamientosRelajacionComponent } from './tratamientos/tratamientos-relajacion/tratamientos-relajacion.component';
import { FooterComponent } from './templates/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InicioComponent,
    QuienesSomosComponent,
    TratamientosComponent,
    ContactosComponent,
    PromocionesComponent,
    SidenavListComponent,
    TratamientosCorporalesComponent,
    TratamientosFacialesComponent,
    TratamientosRelajacionComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    LayoutModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
