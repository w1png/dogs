CREATE TYPE "public"."animal_type_enum" AS ENUM('DOG', 'CAT');--> statement-breakpoint
CREATE TABLE "animal" (
	"id" varchar(255) PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"type" "animal_type_enum" NOT NULL,
	"breed" varchar NOT NULL,
	"description" text NOT NULL,
	"age" text NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
