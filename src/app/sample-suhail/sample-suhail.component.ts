import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute,Params} from '@angular/router';


@Component({
  selector: 'app-sample-suhail',
  templateUrl: './sample-suhail.component.html',
  styleUrls: ['./sample-suhail.component.css']
})
export class SampleSuhailComponent implements OnInit {

constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
  console.log("init: "+this.route.snapshot.params['id']);

console.log("init: "+this.route.snapshot.queryParams);
console.log("init: "+this.route.snapshot.fragment);

  this.route.queryParams.subscribe(
(params)=>{
  console.log("subs: "+params)
}

  )
  this.route.fragment.subscribe(
(params)=>{
  console.log("subs: "+params)
}

  )
    this.route.params.subscribe(
(params:Params)=>{
  console.log(params['id'])
}

  )






  this.route.params.subscribe(
(params:Params)=>{
	console.log(params['id'])
}

  )
  }

  clicked(){

  this.router.navigate([''],{relativeTo:this.route,queryParamsHandling:'preserve'});
}

}
