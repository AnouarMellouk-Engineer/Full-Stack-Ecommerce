/*
  Warnings:

  - You are about to drop the `_Cards` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."_Cards" DROP CONSTRAINT "_Cards_A_fkey";

-- DropForeignKey
ALTER TABLE "public"."_Cards" DROP CONSTRAINT "_Cards_B_fkey";

-- DropTable
DROP TABLE "public"."_Cards";

-- CreateTable
CREATE TABLE "public"."card_session" (
    "sid" VARCHAR NOT NULL,
    "sess" JSON NOT NULL,
    "expire" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "card_session_pkey" PRIMARY KEY ("sid")
);

-- CreateTable
CREATE TABLE "public"."_Carts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_Carts_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "IDX_card_session_expire" ON "public"."card_session"("expire");

-- CreateIndex
CREATE INDEX "_Carts_B_index" ON "public"."_Carts"("B");

-- AddForeignKey
ALTER TABLE "public"."_Carts" ADD CONSTRAINT "_Carts_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_Carts" ADD CONSTRAINT "_Carts_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
