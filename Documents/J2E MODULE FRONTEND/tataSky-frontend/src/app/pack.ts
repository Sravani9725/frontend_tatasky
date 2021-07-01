import { Account } from './account';

export interface Pack {
   packId:number;
    
    
     packName:string;

 

     packValidity:number;

 

    packCost:number;
    
     packDescription:string;
    
    
     PackCount:number;
    
    // channels:Channel[];

 

    // recharge:Recharge[];
    
    account:Account;

}

