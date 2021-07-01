import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
 
  customer:Customer = new Customer();
  constructor(private _customerService:CustomerService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(value:any){
    console.log(value);
    this.customer.firstName=value.firstName;
    this.customer.lastName=value.lastName;
    this.customer.address=value.address;
    this.customer.email=value.email;
    this.customer.mobile=value.mobile;
    
    this.saveCustomer();
  }

  saveCustomer(){
    this._customerService.createCustomer(this.customer).subscribe(data=>{console.log(data)},error => console.log(error));
    this.navigateToCustomers();

  
  }
  navigateToCustomers(){
    this.router.navigate(['/getCustomers']);

  }
}
