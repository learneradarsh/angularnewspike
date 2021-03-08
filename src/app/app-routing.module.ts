import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'banner',
    loadChildren: () =>
      import('./banner/banner.module').then((m) => m.BannerModule),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./product/product.module').then((m) => m.ProductModule),
  },
  {
    path: 'timer',
    loadChildren: () =>
      import('./timer/timer.module').then((m) => m.TimerModule),
  },
  {
    path: 'timerbyservice',
    loadChildren: () =>
      import('./timerbyservice/timerbyservice.module').then(
        (m) => m.TimerbyserviceModule
      ),
  },
  {
    path: 'griddata',
    loadChildren: () =>
      import('./datagrid/datagrid.module').then((m) => m.DatagridModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
