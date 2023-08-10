import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormArray,Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
reactiveForm!:FormGroup;
msg:boolean=false;

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }
onSubmit(){
  console.log(this.reactiveForm.value);
  //this.msg=true;
  alert("form submitted");
  this.reactiveForm.reset();
}
private initForm(){
  this.reactiveForm =new FormGroup ({
    'FirstName': new FormControl('',[ Validators.required,Validators.pattern("^[a-zA-Z]*$")]),
    'MiddleName': new FormControl('',[Validators.pattern("^[a-zA-Z]*$")]),
    'LastName': new FormControl('',[ Validators.required,Validators.pattern("^[a-zA-Z]*$")]),
    'PhoneNumber': new FormControl('',[ Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(10),Validators.maxLength(10)]),
    'EmailId': new FormControl('',[ Validators.required,Validators.pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')])
  })
}
onClear(){
  this.reactiveForm.reset();
}
}
