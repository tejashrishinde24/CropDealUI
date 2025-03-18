import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CropService {
  http = inject(HttpClient);
  private apiUrl = 'https://localhost:7265/api/CropDetail';  // Replace with actual API

  /** Get all crops */
  getAllCrops(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  /** Get crop by ID */
  getCropById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  /** Add a new crop */
  addCrop(crop: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, crop);
  }

  /** Update crop */
  updateCrop(id: number, crop: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, crop);
  }

  /** Delete crop */
  deleteCrop(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
