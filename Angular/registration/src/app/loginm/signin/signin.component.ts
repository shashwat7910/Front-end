import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) { }
  @Input() parentData: string = "This is still child data";
  @Output() clickEvent = new EventEmitter();
  allowParentData: boolean = true;
  formSubmitted: boolean;
  formControls: any;

  userForm: FormGroup;

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      });
    this.formControls = this.userForm.controls;
  }

  handleFormSubmit(event) {
    this.formSubmitted = true;
    if (this.userForm.invalid) {
      return;
    } else {
      alert("Form submitted");
    }
  }
}
