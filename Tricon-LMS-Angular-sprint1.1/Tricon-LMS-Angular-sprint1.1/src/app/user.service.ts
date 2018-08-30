import { Injectable } from '@angular/core';
import {User} from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
   private userUrl:string 
  constructor(private http:HttpClient) { 
     this.userUrl = 'http://localhost:9990/users';
  }

      public getUsers() {
      return this.http.get<User[]>(this.userUrl);
    
  }
}
