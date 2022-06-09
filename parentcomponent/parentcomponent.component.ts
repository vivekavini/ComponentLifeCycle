import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-parentcomponent',
  templateUrl: './parentcomponent.component.html',
  styleUrls: ['./parentcomponent.component.css']
})
export class ParentcomponentComponent implements OnInit {
cdata !:string;
msg !:string;
myarr :any=['viveka','vinitha','saritha'];
  constructor(private _mesgservice:MessageService) { 
    console.log("parent constructor is called")
    this.msg=MessageService.getmsg();
    console.log(this.msg);
  }
 
  ngOnChanges(changes:any)
  {
    console.log("parent onchanges is called.")
  }

  ngOnInit(): void {
    console.log("parent ngonInit is called.")
  }
addvalue()
{
  this.myarr.push();
}
text(value:any)
{
  this.cdata=value;
}
}
