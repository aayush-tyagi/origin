import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, RouterOutlet} from '@angular/router';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false;

  constructor(
    private _Router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
            UserName: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
  }

// convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this._Router.navigateByUrl('/dashboard');

        }

}
