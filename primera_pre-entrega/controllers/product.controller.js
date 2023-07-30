import express, {response, request} from "express";
import { getProductByIdService, getProductsService, setNewProductService, updateProductService, deleteProductService } from "../services/product.service.js";


export const getProductsController = async (req=request, res=response) =>{
    try {
        const { limit } = req.query

        const data = await getProductsService(Number(limit))

        return res.status(200).json(data)
    } catch (error) {
        return res.status(error.httpcode).json({error})
    }
}

export const getProductByIdController = async (req=request, res=response)=>{
    try {
        const { id } = req.params

        const data = await getProductByIdService(id)

        return res.status(200).json(data)
    } catch (error) {
        return res.status(error.httpcode).json({error})
    }
}

export const postNewProductController = async (req=request, res=response)=>{
    try {
        const { title, description, code, price, stock, category } = req.body

        const data = await setNewProductService(title, description, code, price, stock, category)

        return res.status(201).json(data)
    } catch (error) {
        return res.status(error.httpcode).json({error})
    }
}

export const updateNewProductController = async (req=request, res=response)=>{
    try {
        const { id } = req.params
        const newData = req.body

        const data = await updateProductService(Number(id), newData)

        return res.status(201).json(data)
    } catch (error) {
        return res.status(error.httpcode).json({error})
    }
}

export const deleteProductController = async (req=request, res=response)=>{
    try {
        const { id } = req.params

        const data = await deleteProductService(Number(id))

        return res.status(201).json(data)
    } catch (error) {
        return res.status(error.httpcode).json({error})
    }
}