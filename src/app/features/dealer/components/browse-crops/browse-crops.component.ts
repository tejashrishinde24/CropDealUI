import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports:[FormsModule,CommonModule],
  selector: 'app-browse-crops',
  templateUrl: './browse-crops.component.html',
  styleUrls: ['./browse-crops.component.css']
})
export class BrowseCropsComponent implements OnInit {
  searchText: string = '';
  selectedCategory: string = '';
  maxPrice: number = 5000;

  categories: string[] = ["Fruits", "Vegetables", "Grains", "Spices"];
  
  crops = [
    { name: "Wheat", category: "Grains", price: 1200, image: "assets/wheat.jpg" },
    { name: "Tomato", category: "Vegetables", price: 50, image: "assets/tomato.jpg" },
    { name: "Apple", category: "Fruits", price: 200, image: "assets/apple.jpg" },
    { name: "Rice", category: "Grains", price: 1500, image: "assets/rice.jpg" },
    { name: "Turmeric", category: "Spices", price: 4000, image: "assets/turmeric.jpg" }
  ];

  filteredCrops = [...this.crops];

  ngOnInit(): void {}

  filterCrops() {
    this.filteredCrops = this.crops.filter(crop =>
      crop.name.toLowerCase().includes(this.searchText.toLowerCase()) &&
      (this.selectedCategory === '' || crop.category === this.selectedCategory) &&
      crop.price <= this.maxPrice
    );
  }
}
