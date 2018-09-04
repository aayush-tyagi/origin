import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{User} from '../../user' 
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  users: User[];
  selecteduser: User;
user:User;
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers()
    .subscribe( (users) => {
      console.log(users);
      this.users = users;
    });
  }
//btnclick = function(){
  //console.log(this.selecteduser.name);
  //this.router.navigateByUrl('/edit');
//};
updateUser(user){
  this.userService.setter(user);
  this.router.navigateByUrl('/edit');

}
onSelect(user: User): void {
  this.selecteduser = user;
  //console.log(this.selecteduser.name);
  //console.log(this.selecteduser.role)
};


}