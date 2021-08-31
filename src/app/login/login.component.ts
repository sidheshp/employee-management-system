import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared-common/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  LoginForm: FormGroup = this.formbuilder.group({
    email:['',[Validators.required]],
    password: ['', [Validators.required]]

  })

  constructor(private formbuilder : FormBuilder,private router: Router,private auth:AuthenticationService) {}

  ngOnInit(): void {}

  get email(){
    return this.LoginForm.get('email');
  }

  get password() {
    return this.LoginForm.get('password');
  }


  login(): void {
    console.log(this.email?.value);
    console.log(this.password?.value);
    this.auth.login(this.email?.value,this.password?.value).subscribe(
      data=>{
        console.log(data);
      }, error=>{
        console.log(error);
      }
    )

  }

}
