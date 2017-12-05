import { Component, OnInit, Input } from '@angular/core'; 
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { GitHubService } from '../git-hub.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Http, Response} from '@angular/http';
@Component({
  selector: 'app-event-more-info',
  templateUrl: './event-more-info.component.html',
  styleUrls: ['./event-more-info.component.css'],
  providers: [GitHubService]
})
export class EventMoreInfoComponent implements OnInit {

  
  details: JSON[];
  
      constructor(private Router: Router, private eventService: GitHubService){}
  
      ngOnInit(){
        if (localStorage.getItem('cred')==null)
        {
          alert('Please log in first');
          this.Router.navigateByUrl('/');
        }
        else{
          this.getDetails();
        }
      }
      getDetails(){
          this.eventService.getDetails().subscribe(details => this.details = details);
      }

  } 

