// In cartSlice or the file where `Product` is defined for cart
export interface Product {
    id: string;
    name: string;
    price: number;
    quantity: number;
    size: string;
    images?: { image: string }[]; // Add images as an optional property, or make it required if needed
}
