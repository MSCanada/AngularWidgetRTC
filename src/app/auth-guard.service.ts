import { Injectable , OnDestroy} from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot,CanActivateChild } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import { Headers, Http, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate,CanActivateChild{

 constructor(private http:Http) { }

canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean {
	return true;
}


canActivateChild(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean {
	return true;
}


 
}
