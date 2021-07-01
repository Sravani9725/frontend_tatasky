import { Component, OnInit, ViewChild } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-customer-by-id',
  templateUrl: './get-customer-by-id.component.html',
  styleUrls: ['./get-customer-by-id.component.css']
})
export class GetCustomerByIdComponent implements OnInit {
  customer: Customer = new Customer();
  custId: number = 0;
  @ViewChild('id') inputId :any;
  constructor(private customerService: CustomerService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.id = this.route.snapshot.params['id'];
    // this.customerService.getCustomerById(this.id).subscribe(data => { console.log(data); this.customer = data },
    //   error => console.log(error));
  }

  getCustomer(value:any){
  
    this.custId=value;
    this.customerService.getCustomerById(this.custId).subscribe(data => {  this.customer = data;console.log(data);},
      error => console.log(error));
    
    this.inputId.nativeElement.value="";
    
  }

  

}

