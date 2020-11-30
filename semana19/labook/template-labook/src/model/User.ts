export type AuthenticationData = {
    id: string
 }
//--------------------------------------
 export class User {
    constructor(
      private id: string,
      private name: string,
      private email: string,
      private password: string
    ){
    }
//--------------------------------------
   public getId = (): string => this.id
   public getName = (): string => this.name
   public getEmail = (): string => this.email
   public getPassword = (): string => this.password
   
}
//--------------------------------------
 export interface CreateUserInput {
    name: string,
    email: string,
    password: string
 }
//-------------------------------------- 
 export interface CreateUserOutput {
   token: string
}
//--------------------------------------
export interface getUserIdInput {
   id: string
}
//--------------------------------------
export interface AddFriend {
   id: string,
   token: string
}
//--------------------------------------