import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.css']
})
export class ChildcomponentComponent implements OnInit {
currvalue !:string;
prevvalue !:string;

@Input()
pdata !:string;
@Input()
arraylist:any=[];
  constructor() { 
    console.log("Child Constructore is called.");
  }
  ngOnInit(): void {
    this.currvalue='viveka'
    this.prevvalue='jnet technologies';
    console.log("here ngOnInit is called once once for the initialisation ")
    console.log(this.currvalue);
    console.log(this.prevvalue);
  }
  ngOnChanges(changes:any)
  {
console.log("Child ngonchanges is called.");
for(let PropertyName in changes)
{
  let change=changes[PropertyName];
this.currvalue=change.currentvalue;
this.prevvalue=change.previousvalue;
console.log(PropertyName+"currentvalue:"+this.currvalue+"previous value:"+this.prevvalue);
}
  }

 

}
