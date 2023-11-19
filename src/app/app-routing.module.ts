import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { 
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { 
        path: 'exemples', 
        children: [
          { path: '', loadChildren: () => import('./pages/exemples/exemples.module').then(m => m.ExemplesModule) }
        ] 
      },
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
