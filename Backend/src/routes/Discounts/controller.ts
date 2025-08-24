import { Request, Response } from "express";
import { prisma } from "../products/controller";

export const getDiscounts = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const discounts = await prisma.discount.findMany({
      where: {
        productId,
      },
      include: {
        code: true,
      },
    });
    res.status(200).json({ message: "Fetching Discounts ok", discounts });
  } catch (error) {
    res.status(500).json({ message: "Fetching Discounts fieled" });
  }
};

export const addDiscount = async (req: Request, res: Response) => {
  try {
    const { productId, discountValue, code } = req.body;

    const codes = await prisma.discount.findMany({
      where: {
        productId,
      },
      select: {
        code: {
          select: {
            code: true,
          },
        },
      },
    });
    const existingCodes = codes.map((d) => d.code.code);
    if (existingCodes.includes(code)) {
      return res
        .status(400)
        .json({ message: "Discount already exists for this product" });
    }

    const discount = await prisma.discount.create({
      data: {
        value: discountValue,
        code: {
          create: {
            code,
          },
        },
        product: {
          connect: { id: productId },
        },
      },
      include: {
        code: true,
      },
    });
    res.status(200).json({ message: "Fetching Discounts ok", discount });
  } catch (error) {
    res.status(500).json({ message: "creating Discounts fieled" });
  }
};

export const deleteDiscount = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { productId } = req.body;

    const deleted = await prisma.discount.delete({
      where: {
        productId_codeId: {
          productId,
          codeId: id,
        },
      },
    });
    res.status(200).json({ message: "Discount deleted", deleted });
  } catch (error) {
    res.status(500).json({ message: "deleting Discounts fieled" });
  }
};
