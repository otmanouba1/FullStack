import {
  pgTable, serial, varchar, text, numeric, boolean, timestamp, foreignKey
} from 'drizzle-orm/pg-core'

export const products = pgTable('products', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  slug: varchar('slug', { length: 255 }).notNull().unique(),
  description: text('description'),
  price: numeric('price', { precision: 12, scale: 2 }).notNull(),
  sku: varchar('sku', { length: 100 }).unique(),
  stock: numeric('stock', { precision: 10, scale: 0 }).notNull().default("0"),
  is_active: boolean('is_active').notNull().default(true),
  created_at: timestamp('created_at').defaultNow().notNull(),
  updated_at: timestamp('updated_at').defaultNow().notNull(),
})
