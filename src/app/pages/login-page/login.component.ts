import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidatorService } from 'src/app/services/custom-validator/custom-validator.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder, 
    private customValidator: CustomValidatorService, 
    private router: Router
  ) {  }

  ngOnInit(){
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]], 
      password: ["", [Validators.compose([Validators.required, this.customValidator.patternValidator()])]]
    })
  }

  get loginFormControl() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true
    if (this.loginForm.valid) {
      this.router.navigate(["/"])
    }
  }
}
