import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from '../material/material.module';
import { AivaModule } from './aiva/aiva.module';
import { GirhModule } from './girh/girh.module';
import { OnlineComponent } from './online/online.component';
import { OnlineModule } from './online/online.module';
import { ToolbarSidenavComponent } from './components/toolbar-sidenav/toolbar-sidenav.component';


@NgModule({
  declarations: [DashboardComponent, ToolbarSidenavComponent],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    MaterialModule,
    AivaModule,
    GirhModule,
    OnlineModule
  ]
})
export class ProtectedModule { }
