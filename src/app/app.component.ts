import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { NavbarComponent } from "./Components/navbar/navbar.component";
import { FooterComponent } from "./Components/footer/footer.component";
import { RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true, // Ensure standalone component usage
  imports: [NavbarComponent, RouterModule, FooterComponent,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isLoading = true;  // Loading state

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.isLoading = true; // Start loading
      }
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          this.isLoading = false; // Stop loading after delay
        }, 200); // Small delay to prevent flicker
      }
    });
  }
}
