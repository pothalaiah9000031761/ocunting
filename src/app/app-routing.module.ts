import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartAccountsComponent } from './Component/chart-accounts/chart-accounts.component';
import { CostcenterAddComponent } from './Component/costcenter-add/costcenter-add.component';
import { CostcenterUpdateComponent } from './Component/costcenter-update/costcenter-update.component';
import { CostcenterViewComponent } from './Component/costcenter-view/costcenter-view.component';
import { CreditLimitComponent } from './Component/credit-limit/credit-limit.component';
import { CustomerGroupingViewComponent } from './Component/customer-grouping-view/customer-grouping-view.component';
import { CustomergroupComponent } from './Component/customergroup/customergroup.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { ExpensesComponent } from './Component/expenses/expenses.component';
import { GetallVendorsComponent } from './Component/getall-vendors/getall-vendors.component';
import { LoginComponent } from './Component/login/login.component';
import { ProductmasterAddComponent } from './Component/productmaster-add/productmaster-add.component';
import { ProductmasterUpdateComponent } from './Component/productmaster-update/productmaster-update.component';
import { ProductmasterViewComponent } from './Component/productmaster-view/productmaster-view.component';
import { RegisterComponent } from './Component/register/register.component';
import { UpdateallVendorsComponent } from './Component/updateall-vendors/updateall-vendors.component';
import { UpdategroupingcustomerComponent } from './Component/updategroupingcustomer/updategroupingcustomer.component';
import { VendorAddComponent } from './Component/vendor-add/vendor-add.component';
import { VendorUpdateComponent } from './Component/vendor-update/vendor-update.component';
import { VendorViewComponent } from './Component/vendor-view/vendor-view.component';
import { WarehouseDeleteComponent } from './Component/warehouse-delete/warehouse-delete.component';
import { WarehouseGroupingListViewComponent } from './Component/warehouse-grouping-list-view/warehouse-grouping-list-view.component';
import { WarehouseGroupingComponent } from './Component/warehouse-grouping/warehouse-grouping.component';
import { WarehouseListComponent } from './Component/warehouse-list/warehouse-list.component';
import { WarehouseUpdateComponent } from './Component/warehouse-update/warehouse-update.component';

import { CostcenterGroupingComponent } from "src/app/Component/costcenter-grouping/costcenter-grouping.component"
import { CostcenterGroupingViewComponent } from "src/app/Component/costcenter-grouping-view/costcenter-grouping-view.component"
import { CustomerAddComponent } from './Component/customer-add/customer-add.component';
import { CustomerViewComponent } from './Component/customer-view/customer-view.component';
import { CustomerUpdateComponent } from './Component/customer-update/customer-update.component';





const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'warehouselist', component: WarehouseListComponent },
  { path: 'warehouseUpdate', component: WarehouseUpdateComponent },
  { path: 'warehouseDelete', component: WarehouseDeleteComponent },
  { path: 'allvendors', component: GetallVendorsComponent },
  { path: 'updatevendor', component: UpdateallVendorsComponent },
  { path: 'customergroup', component: CustomergroupComponent },
  { path: 'customergroupingview', component: CustomerGroupingViewComponent },
  { path: 'productmaster-add', component: ProductmasterAddComponent },
  { path: 'productmaster-view', component: ProductmasterViewComponent },
  { path: 'vendorAdd', component: VendorAddComponent },
  { path: 'vendorView', component: VendorViewComponent },
  { path: 'vendorUpdate', component: VendorUpdateComponent },
  { path: 'updategroupcustomer/:id', component: UpdategroupingcustomerComponent },
  { path: 'creditlimit', component: CreditLimitComponent },
  { path: 'productMasterUpdate', component: ProductmasterUpdateComponent },
  { path: 'warehouseGrouping', component: WarehouseGroupingComponent },
  { path: 'WHouseGroupListView', component: WarehouseGroupingListViewComponent },
  { path: 'chartAccount', component: ChartAccountsComponent },
  { path: 'expense', component: ExpensesComponent },
  { path: 'costCenterAdd', component: CostcenterAddComponent },
  { path: 'costCenterView', component: CostcenterViewComponent },
  // { path: "costCenterUpdate/:id", component: CostcenterUpdateComponent },
  { path: 'costCenterUpdate', component: CostcenterUpdateComponent },
  { path: 'costCenterGrouping', component: CostcenterGroupingComponent },
  { path: 'costCenterGroupingView', component: CostcenterGroupingViewComponent },
  { path: 'costCenterGrouping', component: CostcenterGroupingComponent },
  { path: 'costCenterGroupingView', component: CostcenterGroupingViewComponent },
  { path: "customer-add", component: CustomerAddComponent },
  { path: "customer-view", component: CustomerViewComponent },
  { path: "customer-update/:id", component: CustomerUpdateComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
