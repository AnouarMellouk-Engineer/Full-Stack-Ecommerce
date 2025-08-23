import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

// find all products
export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await prisma.product.findMany({
      include: {
        categorie: {
          select: {
            name: true,
          },
        },
        specifications: true,
        images: {
          select: {
            path: true,
            isMain: true,
          },
        },
        uses: {
          select: {
            description: true,
          },
        },
        reviews: {
          include: {
            user: {
              select: {
                id: true,
                firstName: true,
                lastName: true,
              },
            },
          },
        },
      },
    });

    res.status(200).json({ message: "fetching data OK", products: products });
  } catch (error) {
    res.status(500).send({ error: error });
  } finally {
    prisma.$disconnect();
    console.log("disconnect2");
  }
};

// find product by id
export const getProductById = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;
    const product = await prisma.product.findUnique({
      where: {
        id: productId,
      },
      include: {
        categorie: {
          select: {
            name: true,
          },
        },
        specifications: true,
        images: {
          select: {
            path: true,
            isMain: true,
          },
        },
        uses: {
          select: {
            description: true,
          },
        },
        reviews: {
          include: {
            user: {
              select: {
                id: true,
                firstName: true,
                lastName: true,
              },
            },
          },
        },
      },
    });
    res.status(200).json({ message: "Product fetched", product });
  } catch (error) {
    res.status(500).send({ error: error });
  } finally {
    prisma.$disconnect();
    console.log("disconnect2");
  }
};

// create a product
export const addProduct = async (req: Request, res: Response) => {
  try {
    const {
      name,
      price,
      quantity,
      sold,
      isNew,
      status,
      categorieId,
      specifications,
      images,
      usesId,
    } = req.body;

    // ✅ Basic validation
    if (
      !name ||
      !price ||
      !categorieId ||
      !specifications ||
      !quantity ||
      isNew === undefined ||
      !status ||
      !images
    ) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    specifications.storage = parseFloat(specifications.storage);
    specifications.ram = parseInt(specifications.ram);
    specifications.Weight = parseFloat(specifications.Weight);

    // ✅ Create product
    const product = await prisma.product.create({
      data: {
        name,
        rating: 0,
        price: parseFloat(price),
        quantity: parseInt(quantity) ?? 0,
        sold,
        isNew,
        status: parseFloat(status),
        categorie: { connect: { id: categorieId } }, // connect existing categorie
        specifications: {
          create: specifications,
        }, // connect existing specifications

        // Optional: create nested data
        images: {
          create: images.map((img: { path: string; isMain: boolean }) => ({
            path: img.path,
            isMain: img.isMain ?? false,
          })),
        },
        uses: usesId
          ? {
              connect: usesId.map((id: string) => ({
                id,
              })),
            }
          : undefined,
      },
      include: {
        categorie: { select: { name: true } },
        specifications: true,
        images: true,
        uses: true,
      },
    });

    res.status(201).json({ message: "Product created successfully", product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create product" });
  }
};

// update product
export const updateProduct = (req: Request, res: Response) => {
  res.send("update product");
};

// delete product
export const deleteProductById = (req: Request, res: Response) => {
  res.send("delete product");
};
