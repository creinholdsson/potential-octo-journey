import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { HttpClientModule } from '@angular/common/http';
import { NgHttpLoaderModule } from 'ng-http-loader/ng-http-loader.module';
import { DialogModule, InputTextModule, InputTextareaModule, ButtonModule, CardModule, DropdownModule, CalendarModule, GrowlModule, ChartModule } from 'primeng/primeng';
import { MessageService } from 'primeng/components/common/messageservice';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TokenInterceptor } from './interceptors/token.interceptor';

import { AppComponent } from './app.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { GameListComponent } from './game-list/game-list.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';
import { GameComponent } from './game/game.component';
import { GameService } from './services/game.service';
import { OrderByPipe } from './directives/order-by-pipe';
import { GameCreateComponent } from './game-create/game-create.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { AuthenticationService } from './services/authentication-service.service';
import { RegisterComponent } from './register/register.component';
import { TakenUsernameDirective } from './directives/taken-username.directive';
import { UserComponent } from './user/user.component';
import { UserService } from './services/user.service';
import { GameEditComponent } from './game-edit/game-edit.component';
import { HasPermissionDirective } from './directives/has-permission.directive';
import { TopListComponent } from './top-list/top-list.component';
import { LimitToPipe } from './limit-to.pipe';
import * as moment from 'moment';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RequestPasswordResetComponent } from './request-password-reset/request-password-reset.component';


const appRoutes: Routes = [
  { path: '', component: IndexComponent},
  { path: 'game/add', component: GameCreateComponent },
  { path: 'game/edit/:id', component: GameEditComponent },
  { path: 'game/:id', component: GameComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user/requestreset', component: RequestPasswordResetComponent },
  { path: 'user/reset', component: ResetPasswordComponent },
  { path: 'user/:username', component: UserComponent }, 
];

@NgModule({
  declarations: [
    AppComponent,
    NavmenuComponent,
    GameListComponent,
    FooterComponent,
    IndexComponent,
    GameComponent,
    OrderByPipe,
    GameCreateComponent,
    LoginComponentComponent,
    RegisterComponent,
    TakenUsernameDirective,
    UserComponent,
    GameEditComponent,
    HasPermissionDirective,
    TopListComponent,
    LimitToPipe,
    ResetPasswordComponent,
    RequestPasswordResetComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserAnimationsModule,
    BrowserModule,
    InputTextModule,
    DialogModule,
    ButtonModule,
    CardModule,
    DropdownModule,
    InputTextareaModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    GrowlModule,
    HttpModule,
    HttpClientModule,
    NgHttpLoaderModule,
    ChartModule,
    NgbModule.forRoot()
  ],
  providers: [
    GameService, 
    MessageService, 
    UserService,
    AuthenticationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    HasPermissionDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
