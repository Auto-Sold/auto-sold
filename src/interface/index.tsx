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
    vehiclesImages: IVehicleImages[];
    comments: IComments[];
    user:IUser
} 

export interface IComments {
    id: string;
    text: string;
    vehicles: Vehicle[]
    createdAt: string;
    user: IUser
}
export interface IVehicleImages {
    id: string;
    image: string;
} 

export interface IUser {
    id: string;
    completeName: string;
    email: string;
    telephone: string;
    cpf: string;
    image: string;
    vehicles: Vehicle[]
    bio: string;
} 
export interface IAdressUser extends IUser{
    cep: string,
    city: string,
    complement: string,
    number: string,
    state: string,
    street: string,

}
export interface IAnnounceData {
    announceType: string;
    title: string;
    year: string;
    km: number;
    price: number;
    description: string;
    vehicleType: string;
    image: string;
}


export interface IFormComment {
    //interface de campos do Formulário
   text: string
}