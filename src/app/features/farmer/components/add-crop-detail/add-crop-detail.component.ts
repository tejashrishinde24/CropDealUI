import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatError } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-crop-detail',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  templateUrl: './add-crop-detail.component.html',
  styleUrls: ['./add-crop-detail.component.css']
})
export class AddCropDetailComponent {
  cropForm = new FormGroup({
    cropName: new FormControl('', Validators.required),
    cropTypeId: new FormControl('', Validators.required),
    quantityAvailable: new FormControl(0, [Validators.required, Validators.min(1)]),
    price: new FormControl(0, [Validators.required, Validators.min(1)]),
    cropLocation: new FormControl('', Validators.required),
    image: new FormControl(null)
  });

  cropTypes = [
    { id: 1, name: 'Wheat' },
    { id: 2, name: 'Rice' },
    { id: 3, name: 'Corn' }
  ];

  isSubmitting = false;
  successMessage = '';

  onImageSelected(event: any) {
    const file = event.target.files[0];
    this.cropForm.patchValue({ image: file });
  }

  onSubmit() {
    if (this.cropForm.valid) {
      this.isSubmitting = true;
      console.log('Crop Data:', this.cropForm.value);
      this.successMessage = 'Crop added successfully!';
      this.cropForm.reset();
      this.isSubmitting = false;
    }
  }
}
