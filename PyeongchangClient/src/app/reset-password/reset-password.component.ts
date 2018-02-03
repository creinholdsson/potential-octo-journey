import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, FormBuilder, FormGroup, Validators, FormControl, AbstractControl, ValidationErrors } from '@angular/forms';
import { Location } from '@angular/common';
import { UserForPasswordReset } from '../domain/auth/user-for-password-reset';
import { AuthenticationService } from '../services/authentication-service.service';
import { MessageService } from 'primeng/components/common/messageservice';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  resetForm: FormGroup;
  token: string;
  userId: string;
  user: UserForPasswordReset = new UserForPasswordReset();
  passwordRepeat: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private authenticationService: AuthenticationService,
    private messageService: MessageService,
    private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
      this.userId = params['id'];
      console.log(this.token);
      console.log(this.userId);
    });

    this.resetForm = new FormGroup({
      'passwords': new FormGroup({
        'password': new FormControl(this.user.password, [
          Validators.required, Validators.minLength(6)
        ]),
        'passwordRepeat': new FormControl(this.passwordRepeat, [
          Validators.required
        ])
      }, { validators: this.areEqual })
    })
  }

  areEqual(c: AbstractControl): ValidationErrors | null {
    const keys: string[] = Object.keys(c.value);
    for (const i in keys) {
      if (i !== '0' && c.value[keys[+i - 1]] !== c.value[keys[i]]) {
        return { areEqual: true };
      }
    }
  }

  reset() {
    this.user.token = this.token;
    this.user.password = this.resetForm.value.passwords.password;
    this.authenticationService.resetPassword(this.userId, this.user).subscribe(result => {
      this.router.navigate(['/']);
      this.messageService.add({ severity: 'success', summary: 'Lösenord återställt', detail: 'Lösenord är återställt, du kan logga in.' });
    }, error => {
      this.messageService.add({ severity: 'error', summary: 'Återställning misslyckades', detail: 'Återställning misslyckades, försök igen' });
    });
  }

}
