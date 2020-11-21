import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomergroupComponent } from './Component/customergroup/customergroup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SideBarComponent } from './Component/side-bar/side-bar.component';
import { FooterComponent } from './Component/footer/footer.component';
import { RegisterComponent } from './Component/register/register.component';
import { WarehouseGroupingComponent } from './Component/warehouse-grouping/warehouse-grouping.component';
import { WarehouseUpdateComponent } from './Component/warehouse-update/warehouse-update.component';
import { WarehouseListComponent } from './Component/warehouse-list/warehouse-list.component';
import { WarehouseDeleteComponent } from './Component/warehouse-delete/warehouse-delete.component';
import { LoginComponent } from './Component/login/login.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { GetallVendorsComponent } from './Component/getall-vendors/getall-vendors.component';
import { UpdateallVendorsComponent } from './Component/updateall-vendors/updateall-vendors.component';
import { ToastrModule } from 'ngx-toastr';
import { HeaderComponent } from './Component/header/header.component';
import { ProductmasterAddComponent } from './Component/productmaster-add/productmaster-add.component';
import { ProductmasterViewComponent } from './Component/productmaster-view/productmaster-view.component';
import { VendorAddComponent } from './Component/vendor-add/vendor-add.component';
import { VendorViewComponent } from './Component/vendor-view/vendor-view.component';
import { VendorUpdateComponent } from './Component/vendor-update/vendor-update.component';
import { CustomerGroupingViewComponent } from './Component/customer-grouping-view/customer-grouping-view.component';
import { UpdategroupingcustomerComponent } from './Component/updategroupingcustomer/updategroupingcustomer.component';
import { CreditLimitComponent } from './Component/credit-limit/credit-limit.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { ProductmasterUpdateComponent } from './Component/productmaster-update/productmaster-update.component';
import { WarehouseGroupingListComponent } from './components/warehouse-grouping-list.component';
import { WarehouseGroupingListViewComponent } from './Component/warehouse-grouping-list-view/warehouse-grouping-list-view.component';
import { CostcenterAddComponent } from './Component/costcenter-add/costcenter-add.component';
import { CostcenterUpdateComponent } from './Component/costcenter-update/costcenter-update.component';
import { CostcenterViewComponent } from './Component/costcenter-view/costcenter-view.component';
import { ChartAccountsComponent } from './Component/chart-accounts/chart-accounts.component';
import { ExpensesComponent } from './Component/expenses/expenses.component';
import { CostcenterGroupingComponent } from "src/app/Component/costcenter-grouping/costcenter-grouping.component"
import { CostcenterGroupingViewComponent } from "src/app/Component/costcenter-grouping-view/costcenter-grouping-view.component"
import { CustomerAddComponent } from './Component/customer-add/customer-add.component';
import { CustomerViewComponent } from './Component/customer-view/customer-view.component';
import { CustomerUpdateComponent } from './Component/customer-update/customer-update.component';






@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    WarehouseGroupingComponent,
    WarehouseListComponent,
    WarehouseUpdateComponent,
    WarehouseDeleteComponent,
    LoginComponent,
    GetallVendorsComponent,
    UpdateallVendorsComponent,
    CustomergroupComponent,
    SideBarComponent,
    FooterComponent,
    HeaderComponent,
    ProductmasterAddComponent,
    CostcenterGroupingComponent,
    CostcenterGroupingViewComponent,
    ProductmasterViewComponent,
    VendorAddComponent,
    VendorViewComponent,
    VendorUpdateComponent,
    CustomerGroupingViewComponent,
    UpdategroupingcustomerComponent,
    CreditLimitComponent,
    DashboardComponent,
    ProductmasterUpdateComponent,
    WarehouseGroupingListComponent,
    WarehouseGroupingListViewComponent,
    CostcenterAddComponent,
    CostcenterUpdateComponent,
    CostcenterViewComponent,
    ChartAccountsComponent,
    ExpensesComponent,
    CustomerAddComponent,
    CustomerViewComponent,
    CustomerUpdateComponent,

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    ToastrModule.forRoot(),
    NgbModule
    //  MatSnackBarModule,




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
