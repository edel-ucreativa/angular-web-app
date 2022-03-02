import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../components/footer/footer.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';


import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule}  from  '@angular/material/divider';
import {MatListModule} from '@angular/material/list'; 

import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button'; 

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatListModule

  ], exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ]
})

export class SharedModule { }
