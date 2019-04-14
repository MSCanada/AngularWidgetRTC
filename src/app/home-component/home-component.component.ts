import { Component, OnInit , OnDestroy} from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Observer } from 'rxjs/Observer';


@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit , OnDestroy{
sub:Subscription;

constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
  const myObservable =Observable.create((observer:Observer)=>{
setTimeout(()=>{observer.next('first package')},2000);
setTimeout(()=>{observer.next('second package')},4000);
//setTimeout(()=>{observer.error('this does not work')},5000);

setTimeout(()=>{observer.complete()},5000);

setTimeout(()=>{observer.next('third package')},7000);

  })

this.sub = myObservable.subscribe(

(data:string) => {console.log(data);},
(error:string) => {console.log(error);},
() =>{console.log('completed');}

)


  }


  ngOnDestroy(){
  this.sub.unsubscribe();
  }

clicked(){


	this.router.navigate(['/sample',234],{relativeTo:this.route,queryParamsHandling:'preserve'});
}
}
