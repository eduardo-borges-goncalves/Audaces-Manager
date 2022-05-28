import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  submitted = false
  forgotForm!: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private router: Router
  ) {  }

  ngOnInit() {
    this.forgotForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]]
    })
  }

  get forgotFormControl () {
    return this.forgotForm.controls
  }

  onSubmit() {
    if (this.forgotForm.valid) {
      window.alert("Instruções para recuperação de senha enviadas.")
      this.router.navigate(["/login"])
    }
  }

}
