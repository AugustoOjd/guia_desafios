import CartManager from "../managers/CartManager.js"

const rutaFile = './primera_pre-entrega'

const cartManager = new CartManager(rutaFile + '/data/cart.json', rutaFile + '/data/products.json')

export const createNewCartService = async ()=>{
    try {
        
        const newCart = await cartManager.createNewCartManager()

        if(!newCart) throw {name: 'server error', httpcode: 500, description: 'Error en crear producto nuevo service'}

        return newCart
    } catch (error) {
        throw error
    }
}

export const getCartByIdService = async (cid)=>{
    try {
        
        const cart = cartManager.getCartByIdManager(Number(cid))

        if(!cart) throw {name: 'client error', httpcode: 404, description: 'Cart not found service'}

        return cart
    } catch (error) {
        throw error
    }
}

export const setProductIntoCartService = async (cid, pid)=>{
    try {
        
        const data = await cartManager.setProductIntoCartManager(cid, pid)

        return data

    } catch (error) {
        throw error
    }
}