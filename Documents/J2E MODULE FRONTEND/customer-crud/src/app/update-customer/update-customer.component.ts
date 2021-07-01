import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { Customer } from '../customer';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  id:number=0;
  @Input() public parentData:any;
 
  customer :Customer=new Customer;
  constructor(private customerService:CustomerService, private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.customerService.getCustomerById(this.id).subscribe(data => {
      this.customer = data; console.log(data);
    },
    error => console.log(error));
  }

  customerUpdate(){
    
    this.customerService.updateCustomer(this.customer).subscribe(data=>{ this.navigateToCustomers();console.log(this.customer);console.log(data)},
  error=>console.log(error));
  }

  navigateToCustomers(){
    this.router.navigate(['/getCustomers']);

  }
}
