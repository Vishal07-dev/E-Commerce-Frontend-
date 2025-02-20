import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  shareddata:any[]=[]
  setData(data:any)
  {
    this.shareddata.push(data)
  }
  getData()
  {
    return this.shareddata
  }
}
