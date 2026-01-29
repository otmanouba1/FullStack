import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as productSchema from './productSchema/schema.ts';
import * as userSchema from './userSchema/schema.ts';

// Create a PostgreSQL client using DATABASE_URL from environment variables
const client = postgres(process.env.DATABASE_URL!,);

// Initialize Drizzle with the client
export const db = drizzle({ client });


export const {
  products,
  categories,
  product_colors,
  product_images,
  product_variants,
  product_ratings,
  users,
  user_addresses,
} = { ...userSchema, ...productSchema };
