




import {
    pgTable, serial, numeric,
} from 'drizzle-orm/pg-core'






export const product_categories = pgTable('product_categories', {
    id: serial('id').primaryKey(),
    product_id: numeric('product_id').notNull(),
    category_id: numeric('category_id').notNull(),
})