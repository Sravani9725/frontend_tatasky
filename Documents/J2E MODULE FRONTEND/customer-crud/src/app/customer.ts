import {Product} from './product'
export interface ICustomer {
    id: number ;
    firstName: string ;
    lastName: string ;
    email: string ;
    address: string ;
    mobile: number ;
   products:Product[];
}

export class Customer implements ICustomer{
    id: number = 0;
    firstName: string = "";
    lastName: string = "";
    email: string = "";
    address: string = "";
    mobile: number = 0;
   products:Product[]=[];

}
// export const customers= [
//     {
//       "id":1,
//       "fname":"sravani",
//       "lname":"siramdas",
//       "address":"Hyderabad",
//       "email":"sravani@ch.com",
//       "mobile":7858847833
//     },
//     {
//       "id":2,
//       "fname":"sravika",
//       "lname":"bajjuri",
//       "address":"Karimnagar",
//       "email":"sravika@ch.com",
//       "mobile":9202837298	
//     }
// ];