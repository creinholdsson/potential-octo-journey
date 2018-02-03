import { Directive, Input, ElementRef, OnInit, Renderer} from '@angular/core';
import { AuthenticationService } from '../services/authentication-service.service';

@Directive({
  selector: '[appHasPermission]'
})
export class HasPermissionDirective implements OnInit {
  
  @Input('appHasPermission') hasPermission: string;
  constructor(private authenticationService: AuthenticationService, 
    private element: ElementRef,
    private renderer: Renderer) {
  }

  ngOnInit(): void {
    console.log('Initialized with ' + this.hasPermission);
    this.applyPermission(this.hasPermission);
    this.authenticationService.getEmitter().asObservable().subscribe(x=> {
      console.log('got event!');
      this.applyPermission(this.hasPermission);
    })
  }

  applyPermission(role: string): void {
    let hasCorrectPermission: boolean = false;
    if (this.hasPermission != null) {
      console.log(this.hasPermission.length);
      if (this.hasPermission.length == 0 && this.authenticationService.isAuthenticated()) {
        console.log('got empty permission, will show if authenticated');
        hasCorrectPermission = true;
      }
      else {
        if (this.authenticationService.hasRole(this.hasPermission)) {
          hasCorrectPermission = true;
        }
        else {
          hasCorrectPermission = false;  
        }
      }
    }

    if (hasCorrectPermission) {
      this.renderer.setElementStyle(this.element.nativeElement, 'display', 'inline-block');
    }
    else {
      this.renderer.setElementStyle(this.element.nativeElement, 'display', 'none');
    }
  }


}
