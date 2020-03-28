import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/conversation',
    pathMatch: 'full'
  },
  {
    path: 'conversation',
    loadChildren: () => import('./modules/views/views.module').then(m => m.ViewsModule)
    //loadChildren: './modules/views/views.module#ViewsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
