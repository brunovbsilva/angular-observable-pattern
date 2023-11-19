import { NgModule } from '@angular/core';
import { ToastComponent } from './toast/toast.component';
import { ExemplesRoutingModule } from './exemples.routing';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ToastComponent
  ],
  imports: [
    CommonModule,
    ExemplesRoutingModule
  ]
})
export class ExemplesModule {}
