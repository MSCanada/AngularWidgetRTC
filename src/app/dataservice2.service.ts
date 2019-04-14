import { Injectable } from '@angular/core';
import { DataserviceService } from './dataservice.service';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import {throwError} from 'rxjs';
import { Observable } from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class Dataservice2Service {

  constructor(private dataService:DataserviceService,private http:Http) { }

  checkLog(){
  const headers = new Headers({'Content-Type':'application/json'});
  	console.log(this.dataService.accounts);
  	return this.http.post('https://jsonpaceholder.typicode.com/posts',JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1
    }),{headers:headers}).catch(
        (error: Response) => {
          return throwError('Something went wrong');
        }
      );
  }


}
