import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
@ViewChild('template') FirstName!: NgForm;
msg:boolean=false;
onSubmit(form: NgForm){
  console.log("First Name: " +form.value.FirstName);
  console.log("Middle Name: " +form.value.MiddleName);
  console.log("Last Name: " +form.value.LastName);
  console.log("Phone number: " +form.value.PhoneNumber);
  console.log("Email ID: " +form.value.EmailId);
  if(form.valid){
    console.log("form Submitted");
    this.msg=true;
    form.reset();
  }
}
}
