import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) { }
  @Input() parentData: string = "This is still child data";
  @Output() clickEvent = new EventEmitter();
  allowParentData: boolean = true;
  formSubmitted: boolean;
  formControls: any;

  userForm: FormGroup;

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
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
