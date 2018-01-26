import { Directive, forwardRef  } from '@angular/core';
import { AuthenticationService } from '../services/authentication-service.service';
import { NG_VALIDATORS, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { Validator } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Directive({
  selector: '[appTakenUsername]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: forwardRef(() =>TakenUsernameDirective), multi: true}]
})
export class TakenUsernameDirective implements Validator {
  @Input() userName: string;
  validate(c: AbstractControl): Promise<{[key : string] : any}>|Observable<{[key : string] : any}> {
    return this.validateUniqueUsername(this.userName);
  }
  registerOnValidatorChange?(fn: () => void): void {
    throw new Error("Method not implemented.");
  }

  validateUniqueUsername(username: string) {
    return new Promise(resolve => this.authenticationService.checkUsername(username).then(result =>{
      if(result) {
        resolve(null)
      }
      else {
        resolve({asyncInvalid: true})
      }
    }));
  }

  validateUniqueUsernameObservable(username: string) {
    return new Observable(observer => {
      this.authenticationService.checkUsername(username).then(result => {
        if(result) {
          observer.next(null)
        }
        else {
          observer.next({asyncInvalid: true})
        }
      })
    })
  }

  constructor(private authenticationService: AuthenticationService) { }

}
