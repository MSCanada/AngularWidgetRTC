import { Component, Input , OnInit,Output,EventEmitter,ContentChild} from '@angular/core';
import { Dataservice2Service } from '../dataservice2.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent implements OnInit{
serverStatus: string = "offline";

@Input() element : string
@Output() display =new EventEmitter<string>();
@ContentChild('content') content;


constructor(private dataService:Dataservice2Service, private router:Router) { }

ngOnInit(){
	console.log("Result is: "+this.element);
	console.log("Content is :"+this.content.nativeElement.textContent)
}
clicked(){
	console.log("Button Clicked");
	this.display.emit("Suhail has been clicked");
	//console.log(this.dataService.checkLog());
	this.dataService.checkLog().subscribe(
	(response) => console.log("response"+response),
	(error) => console.log(error)
	)

	this.router.navigate(['']);
}

}
