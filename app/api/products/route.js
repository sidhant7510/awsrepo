import { NextResponse } from 'next/server';

const products = [
  { id: 1, name: 'Tomato', type: 'Vegetable', pricePerKg: 2.2, inStock: true },
  { id: 2, name: 'Carrot', type: 'Vegetable', pricePerKg: 1.8, inStock: true },
  { id: 3, name: 'Spinach', type: 'Vegetable', pricePerKg: 2.9, inStock: true },
  { id: 4, name: 'Apple', type: 'Fruit', pricePerKg: 3.1, inStock: true },
  { id: 5, name: 'Banana', type: 'Fruit', pricePerKg: 1.5, inStock: true },
  { id: 6, name: 'Orange', type: 'Fruit', pricePerKg: 2.4, inStock: false },
];

export async function GET() {
  return NextResponse.json(
    {
      store: process.env.NEXT_PUBLIC_STORE_NAME || 'Fresh Basket',
      count: products.length,
      products,
    },
    { status: 200 }
  );
}
