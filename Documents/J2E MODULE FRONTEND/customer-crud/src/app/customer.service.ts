import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ICustomer, Customer} from './customer'

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  
 
  
  private baseUrl="http://localhost:8082/customers/"
  constructor(private http:HttpClient) { }
  getCustomerList():Observable<ICustomer[]>{
    return this.http.get<ICustomer[]>(`${this.baseUrl}`+`getAll`);
  }

  createCustomer(customer:Customer):Observable<Object>{
    return this.http.post(`${this.baseUrl}`+`save`,customer);
  }

  updateCustomer(customer:Customer):Observable<Object>{
    return this.http.put(`${this.baseUrl}`+`update`,customer);
  }

  getCustomerById(id:number): Observable<Customer> {
    console.log(`${this.baseUrl}`+`getById/${id}`);
    return this.http.get<Customer>(`${this.baseUrl}`+`getById/${id}`)
  }

  deleteById(id:number):Observable<Object>{
    return this.http.delete<Object>(`${this.baseUrl}`+`delete/${id}`);
  }
}
