import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-psw',
  templateUrl: './forget-psw.component.html',
  styleUrls: ['./forget-psw.component.css']
})
export class ForgetPswComponent implements OnInit {
  angForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.createForm();

  }

  createForm() {
    this.angForm = this.fb.group({
      email: ['', [Validators.required,Validators.email ]]
    });
  }

  ngOnInit() {
  }

}
