import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutModule } from './layout/layout.module';
import { ExemplesModule } from './pages/exemples/exemples.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    ExemplesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
