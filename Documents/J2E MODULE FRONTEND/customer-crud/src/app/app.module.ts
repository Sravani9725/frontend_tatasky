import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { GetCustomerByIdComponent } from './get-customer-by-id/get-customer-by-id.component';
import { DeleteByIdComponent } from './delete-by-id/delete-by-id.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    UpdateCustomerComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
