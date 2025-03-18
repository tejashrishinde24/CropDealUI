import { Component, OnInit, inject } from '@angular/core';
import { CropService } from '../../../farmer/services/crop.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-crops',
  templateUrl: './view-crops.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class ViewCropsComponent implements OnInit {
  cropService = inject(CropService);
  crops: any[] = [];

  ngOnInit() {
    this.cropService.getAllCrops().subscribe({
      next: (data) => this.crops = data,
      error: (err) => console.error('Error fetching crops:', err)
    });
  }
}
