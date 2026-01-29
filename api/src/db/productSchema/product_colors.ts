
import {
    pgTable, serial, varchar, numeric,
} from 'drizzle-orm/pg-core'



export const product_colors = pgTable('product_colors', {
    id: serial('id').primaryKey(),
    product_id: numeric('product_id').notNull(),
    color_name: varchar('color_name', { length: 50 }).notNull(),
    color_hex: varchar('color_hex', { length: 7 }).notNull(),
})