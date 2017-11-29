import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverName="Text";
  allowNewServer=false;
  serverCreated:boolean=false;
  //serverName='Text';
  servers:Array<String>=['Test','Test 1'];
  currentServerMessage="The server has not been created";
  constructor() { 
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000);

  }
 
  ngOnInit() {
  }
  currentServerStatus(){
    this.serverCreated=true;
    this.servers.push(this.serverName);
    this.currentServerMessage="The server is Created "+this.serverName;
  }
  onUpdateServer(event:any) {
    console.log(event);
    this.serverName=(<HTMLInputElement>event.target).value;
  }

}
