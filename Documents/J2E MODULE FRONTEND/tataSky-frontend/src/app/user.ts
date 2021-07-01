import { Account } from './account';

export interface User {
    userId:number;
    username:string;
    firstName:string;
    lastName:string;
    email:string;
    password:string;
    account:Account
}
