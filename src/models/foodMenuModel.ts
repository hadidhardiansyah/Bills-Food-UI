// Define the Category interface
export interface Category {
    id: number;
    name: string;
}

// Define the Ingredient interface
export interface Ingredient {
    id: number;
    name: string;
    category: Category;
    inStoke: boolean;
}

// Define the FoodCategory interface
export interface FoodCategory {
    id: number;
    name: string;
}

// Define the Owner interface
export interface Owner {
    id: number;
    fullName: string;
    email: string;
    role: string;
    favorites: any[]; // You can specify the exact type if favorites are known
    addresses: any[]; // Same for addresses
}

// Define the ContactInformation interface
export interface ContactInformation {
    email: string;
    mobile: string;
    twitter: string;
    instagram: string;
}

// Define the Restaurant interface
export interface Restaurant {
    id: number;
    owner: Owner;
    name: string;
    description: string;
    cuisineType: string;
    address: Record<string, any>; // Adjust as per your address structure
    contactInformation: ContactInformation;
    openingHours: string;
    orders: any[]; // Specify type if known
    images: string[];
    registrationDate: string;
    open: boolean;
}

// Define the FoodItem interface
export interface FoodMenuItemProps {
    id: number;
    name: string;
    description: string;
    price: number;
    foodCategory: FoodCategory;
    images: string[];
    available: boolean;
    restaurant: Restaurant;
    ingredients: Ingredient[];
    creationDate: string | null;
    seasonal: boolean;
    vegetarian: boolean;
}
