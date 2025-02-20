import { Routes } from '@angular/router';
import { HeroSectionComponent } from './Components/hero-section/hero-section.component';
import { ProductPageComponent } from './Components/product-page/product-page.component';

export const routes: Routes = [
    {
        path:'',
        component:HeroSectionComponent
    },
    {
        path:'product',
        component:ProductPageComponent
    }
   
];
