import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Http, Response} from '@angular/http';
import { GitHubService } from '../git-hub.service';
import 'rxjs/add/operator/toPromise';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data ={username: null, password: null};
  cred:string;
  constructor(private Router: Router, private http: Http, private ghService: GitHubService) { 
  }

  ngOnInit() {
    if (localStorage.getItem('cred')!=null)
    {
      this.Router.navigateByUrl('/events');
    }
  }
  formSubmit(){
  this.cred=btoa(this.data.username+':'+this.data.password);
  this.ghService.checkLogin(this.cred).then(() => localStorage.setItem('cred', this.cred)).then(() => this.Router.navigateByUrl('/events'))
  .catch(() => window.alert("Invalid Github login. Please try again") ? "" : location.reload()).catch(() => window.location.reload());
  }
}
