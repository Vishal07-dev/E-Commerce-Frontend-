import { Component } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  imports: [],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent {

  constructor(private readonly data:DataService,private router:Router){}
    productData:any[]=[{
      id:1,
      imgurl:"https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/coffee-asorted-400x400.jpg",
      name:"Assorted Coffee"
    },
    {
      id:2,
      imgurl:"https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/sanitizer-400x400.jpg",
      name:"Hand Sanitizer"
    },
    {
      id:3,
      imgurl:"https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/red-chillies-400x400.jpg",
      name:"Handpicked Red Chillies"
    },
    {
      id:4,
      imgurl:"https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/edible-oil-400x400.jpg",
      name:"Natural Extracted Edible Oil"
    }
  ]
  getData(item:any)
  {
      this.data.setData(item)
      this.router.navigate(['/product'])
  }
}
