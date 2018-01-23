import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgHttpLoaderModule } from 'ng-http-loader/ng-http-loader.module';
import { DataTableModule } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/primeng';
import { CardModule } from 'primeng/primeng';
import { DropdownModule } from 'primeng/primeng';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { OpenGamesComponent } from './open-games/open-games.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';
import { GameComponent } from './game/game.component';
import { GameService } from './services/game.service';

const appRoutes: Routes = [
  { path: '', component: IndexComponent},
  { path: 'game/:id', component: GameComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavmenuComponent,
    OpenGamesComponent,
    FooterComponent,
    IndexComponent,
    GameComponent
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
    FormsModule,
    HttpModule,
    HttpClientModule,
    NgHttpLoaderModule,
    NgbModule.forRoot()
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
