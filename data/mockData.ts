export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

export interface Seller {
  id: string;
  name: string;
  email: string;
  phone: string;
  storeImage: string;
  description: string;
  joinDate: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  images: string[];
  sellerId: string;
  stock: number;
  status: string;
  createdAt: string;
}

export const mockUsers: User[] = [
  {
    id: "user-1",
    name: "John Doe",
    email: "john@example.com",
    phone: "+1-555-0101",
    address: "123 Main Street",
    city: "New York",
    postalCode: "10001",
    country: "USA",
  },
  {
    id: "user-2",
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "+1-555-0102",
    address: "456 Oak Avenue",
    city: "Los Angeles",
    postalCode: "90001",
    country: "USA",
  },
  {
    id: "user-3",
    name: "Michael Johnson",
    email: "michael@example.com",
    phone: "+1-555-0103",
    address: "789 Pine Road",
    city: "Chicago",
    postalCode: "60601",
    country: "USA",
  },
];

export const mockSellers: Seller[] = [
  {
    id: "seller-1",
    name: "Modern Furniture Co.",
    email: "sales@modernfurniture.com",
    phone: "+1-555-1001",
    storeImage: "/images/seller-1.jpg",
    description: "Premium modern furniture and home decor",
    joinDate: "2021-01-15",
  },
  {
    id: "seller-2",
    name: "Classic Designs Ltd.",
    email: "info@classicdesigns.com",
    phone: "+1-555-1002",
    storeImage: "/images/seller-2.jpg",
    description: "Traditional and classic furniture styles",
    joinDate: "2020-06-10",
  },
  {
    id: "seller-3",
    name: "Urban Living Marketplace",
    email: "contact@urbanliving.com",
    phone: "+1-555-1003",
    storeImage: "/images/seller-3.jpg",
    description: "Contemporary urban furniture and accessories",
    joinDate: "2022-03-20",
  },
];

export const mockProducts: Product[] = [
  {
    id: "prod-1",
    name: "Modern Sofa",
    description: "Comfortable 3-seater modern sofa with premium fabric",
    price: 899.99,
    category: "Sofas",
    images: ["/images/sofa-1.jpg"],
    sellerId: "seller-1",
    stock: 12,
    status: "draft",
    createdAt: "2023-01-10",
  },
  {
    id: "prod-2",
    name: "Dining Table Set",
    description: "Solid wood dining table with 6 chairs",
    price: 1299.99,
    category: "Tables",
    images: ["/images/table-1.jpg"],
    sellerId: "seller-1",
    stock: 8,
    status: "draft",
    createdAt: "2023-02-15",
  },
  {
    id: "prod-3",
    name: "Leather Office Chair",
    description: "Ergonomic leather office chair with adjustable height",
    price: 449.99,
    category: "Chairs",
    images: ["/images/chair-1.jpg"],
    sellerId: "seller-2",
    stock: 15,
    status: "draft",
    createdAt: "2023-03-05",
  },
  {
    id: "prod-4",
    name: "Wooden Bed Frame",
    description: "Queen-size wooden bed frame with storage",
    price: 799.99,
    category: "Beds",
    images: ["/images/bed-1.jpg"],
    sellerId: "seller-2",
    stock: 0,
    status: "accepted",
    createdAt: "2023-01-25",
  },
  {
    id: "prod-5",
    name: "Minimalist Bookshelf",
    description: "Modern bookshelf with 5 shelves, white finish",
    price: 249.99,
    category: "Storage",
    images: ["/images/shelf-1.jpg"],
    sellerId: "seller-3",
    stock: 10,
    status: "queue",
    createdAt: "2023-04-12",
  },
  {
    id: "prod-6",
    name: "Accent Wall Lamp",
    description: "Modern LED wall lamp with dimming feature",
    price: 129.99,
    category: "Lighting",
    images: ["/images/lamp-1.jpg", "/images/lamp-2.jpg", "/images/lamp-3.jpg"],
    sellerId: "seller-3",
    stock: 20,
    status: "rejected",
    createdAt: "2023-05-08",
  },
];
