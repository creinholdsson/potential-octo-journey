import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../domain/auth/user';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User = null;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private messageService: MessageService) { }

  ngOnInit() {
    const username = this.route.snapshot.paramMap.get('username');
    this.userService.getUser(username).subscribe(user => this.user = user);

  }

  makeAdministrator() {
    this.userService.makeAdministrator(this.user.username).subscribe(x=>{
      this.messageService.add({severity: 'success', summary:'Användaren är administratör', detail: x});
    }, error => {
      this.messageService.add({severity: 'error', summary:'Fel', detail: `Status: ${error.status}. Detaljer: ${error.error}`});
    })
  }

}
