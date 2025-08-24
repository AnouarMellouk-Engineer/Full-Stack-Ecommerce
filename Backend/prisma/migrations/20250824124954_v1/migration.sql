/*
  Warnings:

  - A unique constraint covering the columns `[productId,codeId]` on the table `Discount` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Discount_productId_codeId_key" ON "public"."Discount"("productId", "codeId");
