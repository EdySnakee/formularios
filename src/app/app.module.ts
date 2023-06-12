import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicFormComponent } from './componentes/basic-form/basic-form.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './componentes/home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    BasicFormComponent,
    NavBarComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
