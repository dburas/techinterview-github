import { Component, OnInit } from '@angular/core';
import { GitHubService} from '../git-hub.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-display-events',
  templateUrl: './display-events.component.html',
  providers:[ GitHubService ],
  outputs: ['url'],
  styleUrls: ['./display-events.component.css']
})
export class DisplayEventsComponent implements OnInit {
  events: JSON[]; 
  url: GitHubService; 
  constructor(private GitHubService: GitHubService, private Router: Router) { }
  ngOnInit(){  
    if (localStorage.getItem('cred')==null)
    {
      alert('Please log in first');
      this.Router.navigateByUrl('/');
    }
    else {this.getEvents();}
  }
  refreshEvents(){
    this.getEvents()
  }
  setUrl(url: string){
    GitHubService.eventUrl= url;
  }
  getEvents(){
    this.GitHubService.getEvents().subscribe(events => this.events = events); 
  }
}
