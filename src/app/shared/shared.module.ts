import { NgModule } from "@angular/core";
import { ToastComponent } from "./components/toast/toast.component";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [
    ToastComponent
  ],
  exports: [
    ToastComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ]
})
export class SharedModule { }