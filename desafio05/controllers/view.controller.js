import express, {response, request} from "express";
import { getProductsService } from '../services/product.service.js'

export const viewHome = async (req = request, res=response) =>{

    const products = await getProductsService()


    res.render('home', {
        products: products
    })

}

export const viewRealTimeProduct = (req = request, res=response) =>{

    res.render('realTimeProducts', {
        title: 'Real time productos'
    })
}