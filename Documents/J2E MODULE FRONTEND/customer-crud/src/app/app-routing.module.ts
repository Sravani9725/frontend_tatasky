import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { GetCustomerByIdComponent } from './get-customer-by-id/get-customer-by-id.component';
import { DeleteByIdComponent } from './delete-by-id/delete-by-id.component';

const routes: Routes = [{path:"getCustomers" , component:CustomerListComponent},
                        {path:"addCustomer", component:AddCustomerComponent},
                        {path: "updateCustomer/:id", component:UpdateCustomerComponent},
                        {path:"getCustomer", component: GetCustomerByIdComponent},
                        {path:"deleteCustomer", component:DeleteByIdComponent},
                        {path:"getCustomerByFirstName",component:GetCustomerByIdComponent},
                        {path:"getCustomerByLastName",component:GetCustomerByIdComponent}           
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };
export const routingComponents=[CustomerListComponent, AddCustomerComponent,UpdateCustomerComponent,
                                 DeleteByIdComponent];
