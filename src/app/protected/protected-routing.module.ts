import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AivaComponent } from './aiva/aiva/aiva.component';
import { GirhComponent } from './girh/girh.component';
import { OnlineComponent } from './online/online.component';

const routes: Routes = [

  {
    path: '',
    children: [
      { path: '', component: DashboardComponent ,
      children: [
        { path: 'aiva', component: AivaComponent },
        { path: 'online', component: OnlineComponent },
        { path: 'girh', component: GirhComponent }
      ]}
    
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
