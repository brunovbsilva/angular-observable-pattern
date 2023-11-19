import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToastComponent } from './toast/toast.component';

const routes: Routes = [
  { 
    path: '', 
    children: [
      { path: 'toast', component: ToastComponent },
      { path: '**', redirectTo: 'toast' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExemplesRoutingModule { }
