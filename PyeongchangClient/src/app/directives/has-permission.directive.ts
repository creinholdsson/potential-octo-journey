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
    if(this.hasPermission) {
      if(this.authenticationService.hasRole(this.hasPermission)) {
        console.log('User has permission');
        this.renderer.setElementStyle(this.element.nativeElement, 'display', 'inline-block');
      }
      else {
        console.log('User doesnt have permission');
        this.renderer.setElementStyle(this.element.nativeElement, 'display', 'none');
      }
    }
  }


}
