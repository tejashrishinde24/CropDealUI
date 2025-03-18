import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dealer-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DealerDashboardComponent {
  constructor(private router: Router) {}

  viewCrops() {
    this.router.navigate(['/browse-crops']);
  }
}
