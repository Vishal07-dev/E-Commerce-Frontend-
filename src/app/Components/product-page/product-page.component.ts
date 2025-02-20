import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-product-page',
  imports: [],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent implements OnInit,OnDestroy{
  serviceData:any[]=[]
  constructor(private data:DataService) {
    
  }

ngOnInit(): void {
  this.getData()
}
ngOnDestroy(): void {
  this.serviceData.pop()
}

  getData()
  {
    this.serviceData=this.data.getData()
    
    
  }
}
