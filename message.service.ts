import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }
  
  getmsg():string 
  {
return "Life Cycle Hooks Of  a Component."
  }

  }

