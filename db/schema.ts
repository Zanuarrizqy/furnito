import { pgTable, uuid, varchar, text, timestamp, time, boolean, foreignKey, numeric, integer, pgEnum } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"

export const ratingInt = pgEnum("rating_int", ['1', '2', '3', '4', '5'])
export const statusProduct = pgEnum("status_product", ['Active', 'Draft', 'Inactive'])
export const userRole = pgEnum("user_role", ['admin', 'seller', 'user'])


export const users = pgTable("Users", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	email: varchar({ length: 50 }).notNull(),
	password: varchar({ length: 50 }).notNull(),
	passwordHash: text().notNull(),
	role: userRole().default('user').notNull(),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: time({ withTimezone: true }).notNull(),
	isActive: boolean().default(true).notNull(),
	telephoneNumber: varchar({ length: 15 }).notNull(),
});

export const passwordReset = pgTable("PasswordReset", {
	id: uuid().primaryKey().notNull(),
	usersId: uuid().notNull(),
	token: text().notNull(),
	expiresAt: timestamp({ precision: 3, withTimezone: true, mode: 'string' }).notNull(),
	usedAt: timestamp({ precision: 3, withTimezone: true, mode: 'string' }).notNull(),
}, (table) => [
	foreignKey({
			columns: [table.usersId],
			foreignColumns: [users.id],
			name: "PasswordReset_usersId_fkey"
		}),
]);

export const stores = pgTable("Stores", {
	id: uuid().primaryKey().notNull(),
	userId: uuid().notNull(),
	storesName: varchar().notNull(),
	storesAddress: text().notNull(),
	isVerified: boolean().notNull(),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	storesDescription: varchar(),
	storesInstagram: varchar(),
	storesNumber: varchar({ length: 15 }).notNull(),
	openingHour: time(),
	closingHour: time(),
}, (table) => [
	foreignKey({
			columns: [table.userId],
			foreignColumns: [users.id],
			name: "Stores_userId_fkey"
		}),
]);

export const products = pgTable("Products", {
	id: uuid().primaryKey().notNull(),
	storesId: uuid().notNull(),
	name: varchar().notNull(),
	description: text().notNull(),
	prices: numeric().notNull(),
	materials: varchar().notNull(),
	color: varchar().notNull(),
	weight: integer().notNull(),
	dimension: integer().notNull(),
	status: statusProduct().notNull(),
	viewCount: integer().notNull(),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	categoriesId: uuid().notNull(),
	guarantee: varchar().notNull(),
	sku: varchar({ length: 15 }).notNull(),
}, (table) => [
	foreignKey({
			columns: [table.storesId],
			foreignColumns: [stores.id],
			name: "Products_storesId_fkey"
		}),
	foreignKey({
			columns: [table.categoriesId],
			foreignColumns: [categories.id],
			name: "Products_categoriesId_fkey"
		}),
]);

export const categories = pgTable("Categories", {
	id: uuid().primaryKey().notNull(),
	name: varchar().notNull(),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).defaultNow().notNull(),
});

export const refreshTokens = pgTable("RefreshTokens", {
	id: uuid().primaryKey().notNull(),
	token: text().notNull(),
	usersId: uuid().notNull(),
	expiresAt: timestamp({ precision: 3, withTimezone: true, mode: 'string' }).notNull(),
	createdAt: timestamp({ precision: 3, withTimezone: true, mode: 'string' }).defaultNow().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.usersId],
			foreignColumns: [users.id],
			name: "RefreshTokens_usersId_fkey"
		}),
]);

export const review = pgTable("Review", {
	id: uuid().primaryKey().notNull(),
	productsId: uuid().notNull(),
	usersId: uuid().notNull(),
	rating: ratingInt().notNull(),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).defaultNow().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.productsId],
			foreignColumns: [products.id],
			name: "Review_productsId_fkey"
		}),
	foreignKey({
			columns: [table.usersId],
			foreignColumns: [users.id],
			name: "Review_usersId_fkey"
		}),
]);
