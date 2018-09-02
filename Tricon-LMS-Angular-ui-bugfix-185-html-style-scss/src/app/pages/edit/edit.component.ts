import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import{User} from '../../user'
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  private user:User;

  constructor(private userService:UserService,private _router:Router) {
   
   }

  ngOnInit() {

    this.user=this.userService.getter();

  }

}
