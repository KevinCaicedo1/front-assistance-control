import { Injectable } from '@angular/core';

@Injectable()
export class RoutePanelService {

  route: number = 0;
  constructor() { }

   get data(): number{
    return this.route;
  }

  set data(val: number){
    this.route = val;
  }

}