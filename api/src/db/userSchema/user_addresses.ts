import { pgTable, serial, varchar, boolean, timestamp, numeric } from 'drizzle-orm/pg-core';


export const user_addresses = pgTable('user_addresses', {
    id: serial('id').primaryKey(),
    user_id: numeric('user_id').notNull(),
    label: varchar('label', { length: 50 }),
    address_line1: varchar('address_line1', { length: 255 }).notNull(),
    address_line2: varchar('address_line2', { length: 255 }),
    city: varchar('city', { length: 100 }).notNull(),
    state: varchar('state', { length: 100 }),
    postal_code: varchar('postal_code', { length: 20 }).notNull(),
    country: varchar('country', { length: 100 }).notNull(),
    is_default: boolean('is_default').default(false),
    created_at: timestamp('created_at').defaultNow().notNull(),
    updated_at: timestamp('updated_at').defaultNow().notNull(),
});
