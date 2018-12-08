import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainDashboardComponent } from './app-body/main-dashboard/main-dashboard.component';
import { SuppliersDashboardComponent } from './app-body/suppliers-dashboard/suppliers-dashboard.component';
import { SupplierCreateFormComponent } from './app-body/suppliers-dashboard/supplier-create-form/supplier-create-form.component';
import { SupplierReadFormComponent } from './app-body/suppliers-dashboard/supplier-read-form/supplier-read-form.component';
import { SupplierUpdateFormComponent } from './app-body/suppliers-dashboard/supplier-update-form/supplier-update-form.component';
import { SupplierDeleteFormComponent } from './app-body/suppliers-dashboard/supplier-delete-form/supplier-delete-form.component';

const routes: Routes = [
  {path: '', redirectTo: '/main-dashboard', pathMatch: 'full'},
  {path: 'main-dashboard', component: MainDashboardComponent},
  {path: 'suppliers-dashboard', component: SuppliersDashboardComponent},
  {path: 'supplier-create-form', component: SupplierCreateFormComponent},
  {path: 'supplier-read-form/:supplier', component: SupplierReadFormComponent},
  {path: 'supplier-update-form', component: SupplierUpdateFormComponent},
  {path: 'supplier-delete-form', component: SupplierDeleteFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
