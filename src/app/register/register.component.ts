import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  angForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();

  }

   createForm() {
    this.angForm = this.fb.group({
      
      userName:['',[Validators.required,Validators.maxLength(10)]],
      email: ['', [Validators.required,Validators.email ]],
      contactNo:['',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]],
      userType:['',Validators.required],
      password: ['', [Validators.required,Validators.minLength(6) ]],
      gender: ['', Validators.required ],
      address:['',Validators.required],
      chk:['',Validators.required]


    });
  }

  ngOnInit() {
  }

}
