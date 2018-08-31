import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {UserService} from '../user.service' 
import { Router } from '@angular/router';




@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[];

  
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers()
    .subscribe( (users) => {
      console.log(users);
      this.users = users;
    });
    
  }

}
