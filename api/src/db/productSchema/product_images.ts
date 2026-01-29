
import {
    pgTable, serial, varchar, text, numeric, boolean,
} from 'drizzle-orm/pg-core'


export const product_images = pgTable('product_images', {
    id: serial('id').primaryKey(),
    product_id: numeric('product_id').notNull(),
    url: text('url').notNull(),
    alt_text: varchar('alt_text', { length: 255 }),
    is_primary: boolean('is_primary').default(false).notNull(),
})