import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class GitHubService {

  static eventUrl: string; 
  
  constructor(private http:Http) { }
  checkLogin(credentials: String) {
    let headers = {'Authorization': 'Basic ' + credentials};
    let testOptions = { headers:  new Headers(headers) };
    return this.http.get('https://api.github.com/zen', testOptions).toPromise();
  }
  private attachAuth() {
    var credentials = localStorage.getItem('cred');
    let headers = {'Authorization': 'Basic ' + credentials};
    return { headers:  new Headers(headers) };
  }

  getDetails(): Observable<JSON[]>{
      return this.http.get(GitHubService.eventUrl, this.attachAuth()).map((res2:Response) => res2.json());
  }
  getEvents(): Observable<JSON[]> {
    return this.http.get('https://api.github.com/events?'+ Date.now(), this.attachAuth()).map((res:Response) => res.json());
}




}