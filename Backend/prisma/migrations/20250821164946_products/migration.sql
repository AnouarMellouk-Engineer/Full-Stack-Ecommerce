/*
  Warnings:

  - The primary key for the `Product` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[specificationsId]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `categorieId` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rating` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `specificationsId` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Product" DROP CONSTRAINT "Product_pkey",
ADD COLUMN     "categorieId" TEXT NOT NULL,
ADD COLUMN     "isNew" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "rating" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "sold" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "specificationsId" TEXT NOT NULL,
ADD COLUMN     "status" DOUBLE PRECISION NOT NULL DEFAULT 10,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "quantity" SET DEFAULT 0,
ADD CONSTRAINT "Product_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Product_id_seq";

-- CreateTable
CREATE TABLE "public"."Categorie" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "descreption" TEXT NOT NULL,

    CONSTRAINT "Categorie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Specifications" (
    "id" TEXT NOT NULL,
    "CPU" TEXT NOT NULL,
    "GPU" TEXT NOT NULL,
    "screen" TEXT NOT NULL,
    "storage" DOUBLE PRECISION NOT NULL,
    "ram" INTEGER NOT NULL,
    "os" TEXT NOT NULL,
    "Weight" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Specifications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Image" (
    "id" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "isMain" BOOLEAN NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Uses" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Uses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Code" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,

    CONSTRAINT "Code_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Discount" (
    "id" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "codeId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "Discount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."_products-uses" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_products-uses_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_products-uses_B_index" ON "public"."_products-uses"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Product_specificationsId_key" ON "public"."Product"("specificationsId");

-- AddForeignKey
ALTER TABLE "public"."Product" ADD CONSTRAINT "Product_categorieId_fkey" FOREIGN KEY ("categorieId") REFERENCES "public"."Categorie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Product" ADD CONSTRAINT "Product_specificationsId_fkey" FOREIGN KEY ("specificationsId") REFERENCES "public"."Specifications"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Image" ADD CONSTRAINT "Image_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Discount" ADD CONSTRAINT "Discount_codeId_fkey" FOREIGN KEY ("codeId") REFERENCES "public"."Code"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Discount" ADD CONSTRAINT "Discount_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_products-uses" ADD CONSTRAINT "_products-uses_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_products-uses" ADD CONSTRAINT "_products-uses_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."Uses"("id") ON DELETE CASCADE ON UPDATE CASCADE;
