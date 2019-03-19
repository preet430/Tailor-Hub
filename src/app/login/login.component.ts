import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  angForm: FormGroup;

  constructor(private router: Router,private fb: FormBuilder) { 
    this.createForm();

  }
  createForm() {
    this.angForm = this.fb.group({
      email: ['', [Validators.required,Validators.email ]],
      password: ['', [Validators.required,Validators.minLength(6) ]],
      userType:['',Validators.required],
      chk:['',Validators.required]


    });
  }

  ngOnInit() {
  }

 helo(){
  this.router.navigate(['/']);

 }

}
