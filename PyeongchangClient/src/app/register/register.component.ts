import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserForCreation } from '../domain/auth/user-for-creation';
import { AuthenticationService } from '../services/authentication-service.service';
import { ValidatorFn } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  user: UserForCreation = new UserForCreation();
  passwordRepeat: string;
  usernameTaken: boolean = false;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      'username': new FormControl(this.user.username, [
        Validators.required, 
        Validators.minLength(5), 
        Validators.maxLength(25),
        Validators.pattern('^[a-zA-Z-_0-9]+$')
      ]),
      'email': new FormControl(this.user.email, [
        Validators.required, Validators.email
      ]),
      'passwords': new FormGroup({
        'password': new FormControl(this.user.password, [
          Validators.required, Validators.minLength(6)
        ]),
        'passwordRepeat': new FormControl(this.passwordRepeat, [
          Validators.required
        ])
      }, {validators: this.areEqual})
    })
  }

  areEqual(c: AbstractControl): ValidationErrors | null {
    const keys: string[] = Object.keys(c.value);
    for (const i in keys) {
      if (i !== '0' && c.value[ keys[ +i - 1 ] ] !== c.value[ keys[ i ] ]) {
        return { areEqual: true };
      }
    }
  }

  mustEqualPasswordValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      const equal = this.user.password == this.passwordRepeat;
      return !equal ? {'passwordRepeat': {value: control.value}} : null;      
    }
  } 

  get username() { return this.registerForm.get('username'); }
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }
  get repeatPassword() { return this.registerForm.get('repeatPassword'); }

  resetUsernameTakenStatus() {
    this.usernameTaken = false;
  }

  register() {
    this.usernameTaken = false;
    this.user = new UserForCreation();
    this.user.username = this.registerForm.value.username;
    this.user.email = this.registerForm.value.email;
    this.user.password = this.registerForm.value.passwords.password;

    this.authenticationService.checkUsername(this.user.username).then(x=> {
      if(x) {
        this.authenticationService.createUser(this.user);
      }
      else {
        this.usernameTaken = true;
      }
    }, error => {
      this.usernameTaken = true;
    })

    
  }
}
