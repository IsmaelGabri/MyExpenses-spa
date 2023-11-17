import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from '../Models/LoginModel';
import { LoginService } from '../service/login.service';
import { Token } from '@angular/compiler';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit{
  
  loginForm! : FormGroup;

  constructor(private formbuilder : FormBuilder, private router: Router, public loginService : LoginService) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group(
      {
        firstName: ['', []],
        lastName: ['', []],
        email: ['', [Validators.required, Validators.email]]
      }
    );
  }

submitLogin()
{
  debugger
  var dadosLogin = this.loginForm.getRawValue() as LoginModel;

  this.loginService.LoginUsuario(dadosLogin).subscribe(Token => 
  { 
    debugger 
    var nossoToken = Token
  },
  erro=> {

  })
}

}
