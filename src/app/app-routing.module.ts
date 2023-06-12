import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BasicFormComponent } from './componentes/basic-form/basic-form.component';




const routes: Routes = [{

  path: "basic",
  component: BasicFormComponent,



}];



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
