import {Component, OnInit} from '@angular/core';
import { Observable } from '../../../../node_modules/rxjs';
import { Router } from '../../../../node_modules/@angular/router';
import {
    AuthService,
    GoogleLoginProvider
} from 'angular5-social-login';

 
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
 
 
export class SigninComponent implements OnInit {
 
  constructor( private socialAuthService: AuthService,
    private _Router: Router ) {}
  ngOnInit() { 
  }
  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
        // Now sign-in with userData
        this._Router.navigateByUrl('/dashboard');         
      }
    );
  }
  
}