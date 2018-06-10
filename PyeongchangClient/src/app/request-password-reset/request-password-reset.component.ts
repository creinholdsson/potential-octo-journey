import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, Validators, FormControl, AbstractControl, ValidationErrors } from '@angular/forms';
import { AuthenticationService } from '../services/authentication-service.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/components/common/messageservice';
import { LeagueService } from '../services/league.service';
import { League } from '../domain/league';

@Component({
  selector: 'app-request-password-reset',
  templateUrl: './request-password-reset.component.html',
  styleUrls: ['./request-password-reset.component.css']
})
export class RequestPasswordResetComponent implements OnInit {
  requestResetForm: FormGroup;
  email: string;
  league: League;
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private messageService: MessageService,
    private leagueService: LeagueService) { }

  ngOnInit() {
    this.requestResetForm = new FormGroup({
      'email': new FormControl(this.email, [
        Validators.required, Validators.email
      ])
    });
    this.leagueService.getCurrentLeague().subscribe(x => {
      this.league = x;
    });
  }

  requestReset() {
    this.authenticationService.requestResetPassword(this.requestResetForm.value.email, this.league.url).subscribe(x => {
      console.log('I am here');
      this.router.navigate(['/']);
      this.messageService.add({ severity: 'success', summary: 'Begäran skickad', detail: 'Begäran om återställning har skickats, kolla din e-post för instruktioner' });
    })
  }

}
