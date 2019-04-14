import { Component, OnInit , ViewChild} from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor(private dataService:DataserviceService) { }

  ngOnInit() {
  }

@ViewChild('name') name;
  serverName = "";
  serverName1 = "suhail";

  disableIt : boolean = true; 
  serversList =["suhail","suhai","asas","asdasd"];
  onUpdateText(event){
this.serverName= (<HTMLInputElement>event.target).value;
  }

  hideIt(){
  return true;
  }

  clickPressed(event){
console.log(event);
console.log(this.name);
console.log("October");
this.dataService.accounts.push(1);
  }
}
