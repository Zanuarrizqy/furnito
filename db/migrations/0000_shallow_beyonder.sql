-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TYPE "public"."rating_int" AS ENUM('1', '2', '3', '4', '5');--> statement-breakpoint
CREATE TYPE "public"."status_product" AS ENUM('Active', 'Draft', 'Inactive');--> statement-breakpoint
CREATE TYPE "public"."user_role" AS ENUM('admin', 'seller', 'user');--> statement-breakpoint
CREATE TABLE "Users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"email" varchar(50) NOT NULL,
	"password" varchar(50) NOT NULL,
	"passwordHash" text NOT NULL,
	"role" "user_role" DEFAULT 'user' NOT NULL,
	"createdAt" timestamp with time zone NOT NULL,
	"updatedAt" time with time zone NOT NULL,
	"isActive" boolean DEFAULT true NOT NULL,
	"telephoneNumber" varchar(15) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "PasswordReset" (
	"id" uuid PRIMARY KEY NOT NULL,
	"usersId" uuid NOT NULL,
	"token" text NOT NULL,
	"expiresAt" timestamp(3) with time zone NOT NULL,
	"usedAt" timestamp(3) with time zone NOT NULL
);
--> statement-breakpoint
CREATE TABLE "Stores" (
	"id" uuid PRIMARY KEY NOT NULL,
	"userId" uuid NOT NULL,
	"storesName" varchar NOT NULL,
	"storesAddress" text NOT NULL,
	"isVerified" boolean NOT NULL,
	"createdAt" timestamp with time zone DEFAULT now() NOT NULL,
	"storesDescription" varchar,
	"storesInstagram" varchar,
	"storesNumber" varchar(15) NOT NULL,
	"openingHour" time,
	"closingHour" time
);
--> statement-breakpoint
CREATE TABLE "Products" (
	"id" uuid PRIMARY KEY NOT NULL,
	"storesId" uuid NOT NULL,
	"name" varchar NOT NULL,
	"description" text NOT NULL,
	"prices" numeric NOT NULL,
	"materials" varchar NOT NULL,
	"color" varchar NOT NULL,
	"weight" integer NOT NULL,
	"dimension" integer NOT NULL,
	"status" "status_product" NOT NULL,
	"viewCount" integer NOT NULL,
	"createdAt" timestamp with time zone DEFAULT now() NOT NULL,
	"categoriesId" uuid NOT NULL,
	"guarantee" varchar NOT NULL,
	"sku" varchar(15) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "Categories" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"createdAt" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "RefreshTokens" (
	"id" uuid PRIMARY KEY NOT NULL,
	"token" text NOT NULL,
	"usersId" uuid NOT NULL,
	"expiresAt" timestamp(3) with time zone NOT NULL,
	"createdAt" timestamp(3) with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "Review" (
	"id" uuid PRIMARY KEY NOT NULL,
	"productsId" uuid NOT NULL,
	"usersId" uuid NOT NULL,
	"rating" "rating_int" NOT NULL,
	"createdAt" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "PasswordReset" ADD CONSTRAINT "PasswordReset_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "public"."Users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "Stores" ADD CONSTRAINT "Stores_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."Users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "Products" ADD CONSTRAINT "Products_storesId_fkey" FOREIGN KEY ("storesId") REFERENCES "public"."Stores"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "Products" ADD CONSTRAINT "Products_categoriesId_fkey" FOREIGN KEY ("categoriesId") REFERENCES "public"."Categories"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "RefreshTokens" ADD CONSTRAINT "RefreshTokens_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "public"."Users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "Review" ADD CONSTRAINT "Review_productsId_fkey" FOREIGN KEY ("productsId") REFERENCES "public"."Products"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "Review" ADD CONSTRAINT "Review_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "public"."Users"("id") ON DELETE no action ON UPDATE no action;
*/