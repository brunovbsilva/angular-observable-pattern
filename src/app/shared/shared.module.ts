import { NgModule } from "@angular/core";
import { ToastComponent } from "./components/toast/toast.component";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    ToastComponent
  ],
  exports: [
    ToastComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule
  ]
})
export class SharedModule { }