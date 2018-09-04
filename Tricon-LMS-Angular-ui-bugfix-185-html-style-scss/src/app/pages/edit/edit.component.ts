import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import{User} from '../../user'
import { Router } from '@angular/router';
import {role} from '../../role';
import{status} from '../../status';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
   user:User;
   role:role[];
   status:status[];
   
  constructor(private userService:UserService,private _router:Router) {
   
   }

  ngOnInit() {
debugger;
    this.user=this.userService.getter();
    this.role=[
      { role:"Learner"},
      {role:"Instructor"}
     
    ];
    this.status=[
      {status:"Active"},
      {status:"InActive"}
    ]
    

  }
  processForm(){
    this.userService.updateUser(this.user).subscribe((user)=>{
   console.log(user);
   this._router.navigateByUrl('/user')
    });
  }

}
