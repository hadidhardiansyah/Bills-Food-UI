export interface RestaurantResponseModel {
    id: number;
    owner: Owner;
    name: string;
    description: string;
    cuisineType: string;
    address: Address;
    contactInformation: ContactInformation;
    openingHours: string;
    orders: Order[];
    images: string[];
    registrationDate: string;
    open: boolean;
}

export interface Owner {
    id: number;
    fullName: string;
    email: string;
    role: string;
    favorites: any[];
    addresses: Address[];
}

export interface Address {
    street?: string;
    city?: string;
    state?: string;
    postalCode?: string;
    country?: string;
}

export interface ContactInformation {
    email: string;
    mobile: string;
    twitter?: string;
    instagram?: string;
}

export interface Order {
    // Add fields based on the API response if orders contain specific data
}
