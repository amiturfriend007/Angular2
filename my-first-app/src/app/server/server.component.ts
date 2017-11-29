import { Component } from '@angular/core';
@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styles: [`
        .online{
            color: white;
        }
    `]
})
export class ServerComponent {

    serverStatus:String='offline';
    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online':'offline';
    }

    getColor()
    {
        return this.serverStatus==='offline'?'red':'green';
    }
}