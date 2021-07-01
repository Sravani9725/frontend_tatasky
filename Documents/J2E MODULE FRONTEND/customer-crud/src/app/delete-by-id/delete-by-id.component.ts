import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-by-id',
  templateUrl: './delete-by-id.component.html',
  styleUrls: ['./delete-by-id.component.css']
})
export class DeleteByIdComponent implements OnInit {
  id:number=0;
  message:string="";

  constructor(private customerService : CustomerService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.id= this.route.snapshot.params['id'];
    // this.customerService.deleteById(this.id).subscribe(data=>{console.log(data)},
    //  error=>console.log(error));
  }
  deleteCustomer(value:any){
    this.id=value;
    this.customerService.deleteById(this.id).subscribe(data=>{console.log(data)},
    error=>console.log(error));
    this.message="Account with id "+this.id+" is successfully deleted."
  }

}
