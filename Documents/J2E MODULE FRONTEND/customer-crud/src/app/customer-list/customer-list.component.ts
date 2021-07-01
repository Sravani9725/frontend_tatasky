import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ICustomer, Customer } from '../customer';
import { Product } from '../product';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers:any;
 
  constructor(private _customerService : CustomerService){}
  ngOnInit(): void {
   this._customerService.getCustomerList().subscribe(data =>{
     this.customers=data;
    
   }

    );
  
  }

}
