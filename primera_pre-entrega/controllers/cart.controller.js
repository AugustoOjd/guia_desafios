import express, {response, request} from "express";
import { createNewCartService, getCartByIdService, setProductIntoCartService} from '../services/cart.service.js'

export const createNewCartController = async (req = request, res= response)=>{
    try {
        const data = await createNewCartService()

        return res.status(201).json(data)
    } catch (error) {
        return res.status(error.httpcode).json(error)
    }
}

export const getCartByIdController = async(req = request, res= response)=>{
    try {
        const { cid } = req.params

        const data = await getCartByIdService(cid)

        return res.status(201).json(data)
    } catch (error) {
        return res.json(error)
    }
}

export const setProductToCart = async(req = request, res= response)=>{
    try {
        const {cid, pid} = req.params

        const data = await setProductIntoCartService(cid, pid)

        return res.status(201).json(data)
    } catch (error) {
        return res.json(error)
    }
}