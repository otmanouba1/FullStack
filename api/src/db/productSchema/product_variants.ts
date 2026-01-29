
import {
    pgTable, serial, varchar, numeric
} from 'drizzle-orm/pg-core'


export const product_variants = pgTable('product_variants', {
    id: serial('id').primaryKey(),
    product_id: numeric('product_id').notNull(),
    variant_name: varchar('variant_name', { length: 100 }).notNull(), // e.g., "Size: M"
    price_modifier: numeric('price_modifier', { precision: 12, scale: 2 }).default("0"),
    stock: numeric('stock', { precision: 10, scale: 0 }).notNull().default("0"),
})
