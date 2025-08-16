import {Request ,Response} from "express"


export const getProducts =(req:Request,res:Response)=>{
    res.send("get all products");
}

export const getProductById =(req:Request,res:Response)=>{
    res.send("get one product");
}

export const addProduct =(req:Request,res:Response)=>{
    res.send("new Product");
}

export const updateProduct =(req:Request,res:Response)=>{
    res.send("update product");
}

export const deleteProductById =(req:Request,res:Response)=>{
    
    res.send("delete product")
}