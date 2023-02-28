export interface Vehicle {
    id: string;
    announceType: string;
    title: string;
    year: number;
    km: number;
    price: number;
    description: string;
    vehicleType: string;
    image: string;
    isActive: boolean;
    vehiclesImages: string[];
    user:User
} 

export interface User {
    id: string;
    completeName: string;
    email: string;
    telephone: string;
    cpf: string;
    image: string;
    vehicles: Vehicle[]
    bio: string;
} 