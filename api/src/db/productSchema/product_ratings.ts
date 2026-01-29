import {
    pgTable, serial, text, numeric, timestamp
} from 'drizzle-orm/pg-core'

export const product_ratings = pgTable('product_ratings', {
    id: serial('id').primaryKey(),
    product_id: numeric('product_id').notNull(),
    user_id: numeric('user_id').notNull(),
    rating: numeric('rating', { precision: 2, scale: 1 }).notNull(), // e.g., 4.5
    comment: text('comment'),
    created_at: timestamp('created_at').defaultNow().notNull(),
})