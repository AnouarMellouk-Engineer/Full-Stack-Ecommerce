import {Request ,Response} from "express"
import { PrismaClient } from "@prisma/client";



const prisma = new PrismaClient();


// find all products
export const getProducts = async (req:Request,res:Response)=>{
    try {
        const products = await prisma.product.findMany();
        res.status(200).json({message:"fetching data OK",products:products});
    }catch(error){
         res.status(500).send({error :error});
    }finally{
         prisma.$disconnect();
        console.log("disconnect2")
    }  
}


// find product by id
export const getProductById =(req:Request,res:Response)=>{

    res.send("get one product");
}


// create a product
export const addProduct = async (req:Request,res:Response)=>{
     const { name, price, quantity } = req.body; 
    try{
         const product =  await prisma.product.create({data:{name: name,price:price,quantity:quantity}});
        res.status(201).send({message: "product added ",product: product});
    }catch(error ){
        res.status(500).send({error :error});
    }finally{
        prisma.$disconnect();
        console.log("disconnect")
    }      
}



// update product
export const updateProduct =(req:Request,res:Response)=>{
    res.send("update product");
}


// delete product
export const deleteProductById =(req:Request,res:Response)=>{
    
    res.send("delete product")
}