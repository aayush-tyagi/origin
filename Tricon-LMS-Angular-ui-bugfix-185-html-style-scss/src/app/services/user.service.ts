import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{User} from '../user';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user:User
  private userUrl:string 
  constructor(private http:HttpClient) { 
     this.userUrl = 'http://localhost:9990/users';
  }

  

  public getUsers() {
    return this.http.get<User[]>(this.userUrl);
}
setter(user:User){
  this.user=user;
}
getter(){
  return this.user;
}
}
