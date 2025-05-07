-- Drop old columns if they exist
ALTER TABLE "pins" DROP COLUMN IF EXISTS "tags";

-- Add user metadata fields
ALTER TABLE "users" 
  ADD COLUMN IF NOT EXISTS "language" TEXT DEFAULT 'en',
  ADD COLUMN IF NOT EXISTS "region" TEXT DEFAULT 'global';

-- Create tags table
CREATE TABLE IF NOT EXISTS "tags" (
  "id" SERIAL NOT NULL,
  "name" VARCHAR(100) NOT NULL,
  "slug" VARCHAR(100) NOT NULL,
  "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP(3),
  "created_by_id" INTEGER NOT NULL,
  CONSTRAINT "tags_pkey" PRIMARY KEY ("id")
);

-- Create join tables (with created_at for better tracking)
CREATE TABLE IF NOT EXISTS "user_tags" (
  "user_id" INTEGER NOT NULL,
  "tag_id" INTEGER NOT NULL,
  "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "user_tags_pkey" PRIMARY KEY ("user_id", "tag_id")
);

CREATE TABLE IF NOT EXISTS "pin_tags" (
  "pin_id" INTEGER NOT NULL,
  "tag_id" INTEGER NOT NULL,
  "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "pin_tags_pkey" PRIMARY KEY ("pin_id", "tag_id")
);

-- Create indexes
CREATE UNIQUE INDEX IF NOT EXISTS "tags_name_key" ON "tags"("name");
CREATE UNIQUE INDEX IF NOT EXISTS "tags_slug_key" ON "tags"("slug");
CREATE INDEX IF NOT EXISTS "tags_name_idx" ON "tags"("name");
CREATE INDEX IF NOT EXISTS "tags_slug_idx" ON "tags"("slug");
CREATE INDEX IF NOT EXISTS "user_tags_user_id_idx" ON "user_tags"("user_id");
CREATE INDEX IF NOT EXISTS "user_tags_tag_id_idx" ON "user_tags"("tag_id");
CREATE INDEX IF NOT EXISTS "pin_tags_pin_id_idx" ON "pin_tags"("pin_id");
CREATE INDEX IF NOT EXISTS "pin_tags_tag_id_idx" ON "pin_tags"("tag_id");

-- Add foreign keys
ALTER TABLE "tags" 
  ADD CONSTRAINT "tags_created_by_id_fkey" 
  FOREIGN KEY ("created_by_id") REFERENCES "users"("id") 
  ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "user_tags"
  ADD CONSTRAINT "user_tags_user_id_fkey"
  FOREIGN KEY ("user_id") REFERENCES "users"("id")
  ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "user_tags"
  ADD CONSTRAINT "user_tags_tag_id_fkey"
  FOREIGN KEY ("tag_id") REFERENCES "tags"("id")
  ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "pin_tags"
  ADD CONSTRAINT "pin_tags_pin_id_fkey"
  FOREIGN KEY ("pin_id") REFERENCES "pins"("id")
  ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "pin_tags"
  ADD CONSTRAINT "pin_tags_tag_id_fkey"
  FOREIGN KEY ("tag_id") REFERENCES "tags"("id")
  ON DELETE CASCADE ON UPDATE CASCADE;