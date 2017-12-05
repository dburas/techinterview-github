import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { EventMoreInfoComponent } from './event-more-info/event-more-info.component';
import { DisplayEventsComponent } from './display-events/display-events.component';
import { LoginComponent } from './login/login.component';
import { GitHubService } from './git-hub.service';

const appRoutes: Routes = [
  { 
    path: '', 
    component: LoginComponent,
    pathMatch: 'full'
  },
  { 
    path: 'more-info', 
    component: EventMoreInfoComponent,
    pathMatch: 'full'
  },
  {
    path: 'events',
    component: DisplayEventsComponent,
    pathMatch: 'full'
  }
  ];
@NgModule({
  declarations: [
    AppComponent,
    EventMoreInfoComponent,
    DisplayEventsComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [
    GitHubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
