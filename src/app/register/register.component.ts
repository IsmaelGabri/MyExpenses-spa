import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from '../Models/LoginModel';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit{
  
  loginForm! : FormGroup;

  constructor(private formbuilder : FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group(
      {
        firstName: ['', []],
        lastName: ['', []],
        email: ['', [Validators.required, Validators.email]]
      }
    )
  }

submitLogin()
{
  debugger
  var dadosLogin = this.loginForm.getRawValue() as LoginModel;
}

}
