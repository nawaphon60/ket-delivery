import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'order-detail', loadChildren: () => import('./pages/order-detail/order-detail.module').then(m => m.OrderDetailModule) },
  { path: 'delivery-manager', loadChildren: () => import('./pages/delivery-manager/delivery-manager.module').then(m => m.DeliveryManagerModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
