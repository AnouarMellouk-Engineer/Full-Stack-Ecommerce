/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Categorie` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `image` to the `Categorie` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Categorie" ADD COLUMN     "image" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Categorie_name_key" ON "public"."Categorie"("name");
