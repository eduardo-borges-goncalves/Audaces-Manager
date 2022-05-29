import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class CustomValidatorService {
  patternValidator(): ValidatorFn {
    return(control: AbstractControl) => {
      return control.value.length > 5 ? null : { invalidPassword: true }
    }
  }
}
