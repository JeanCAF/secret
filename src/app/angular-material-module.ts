import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {CommonModule} from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';








@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    CommonModule,
    MatTabsModule,
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],

  exports: [
    MatToolbarModule,
    MatSidenavModule,
    CommonModule,
    MatTabsModule,
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule

  ]
})
export class AngularMaterialModule { }
