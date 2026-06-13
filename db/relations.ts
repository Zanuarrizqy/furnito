import { relations } from "drizzle-orm/relations";
import { users, passwordReset, stores, products, categories, refreshTokens, review } from "./schema";

export const passwordResetRelations = relations(passwordReset, ({one}) => ({
	user: one(users, {
		fields: [passwordReset.usersId],
		references: [users.id]
	}),
}));

export const usersRelations = relations(users, ({many}) => ({
	passwordResets: many(passwordReset),
	stores: many(stores),
	refreshTokens: many(refreshTokens),
	reviews: many(review),
}));

export const storesRelations = relations(stores, ({one, many}) => ({
	user: one(users, {
		fields: [stores.userId],
		references: [users.id]
	}),
	products: many(products),
}));

export const productsRelations = relations(products, ({one, many}) => ({
	store: one(stores, {
		fields: [products.storesId],
		references: [stores.id]
	}),
	category: one(categories, {
		fields: [products.categoriesId],
		references: [categories.id]
	}),
	reviews: many(review),
}));

export const categoriesRelations = relations(categories, ({many}) => ({
	products: many(products),
}));

export const refreshTokensRelations = relations(refreshTokens, ({one}) => ({
	user: one(users, {
		fields: [refreshTokens.usersId],
		references: [users.id]
	}),
}));

export const reviewRelations = relations(review, ({one}) => ({
	product: one(products, {
		fields: [review.productsId],
		references: [products.id]
	}),
	user: one(users, {
		fields: [review.usersId],
		references: [users.id]
	}),
}));