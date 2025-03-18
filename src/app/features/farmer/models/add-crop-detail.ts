export interface CropDetail {
    id?: number; // Optional, as it's auto-generated in backend
    farmerId: number;
    cropTypeId: number;
    cropName: string;
    quantityAvailable: number;
    status?: string; // Default: "Available"
    cropLocation: string;
    price: number;
    imageUrl?: string;
    createdAt?: Date;
    updatedAt?: Date;
  }
  