import ProductManager from "../managers/ProductManager.js"

const rutaFile = './primera_pre-entrega'

const productManager = new ProductManager(rutaFile + '/data/products.json',  rutaFile + '/data/count.txt')


export const getProductsService = async (limit)=>{
    try {
        const products = await productManager.getProducts()

        if(products.length <= 0) throw {name: 'db error', httpcode: 500, description: 'No se encontraron productos'}

        if(limit){
            const limited = products.slice(0, limit)

            return limited
        }

        return products
    } catch (error) {
        throw error
    }
}


export const getProductByIdService = async (id)=>{
    try {
        const product = await productManager.getProductsById(Number(id))

        if(!product) throw {name: 'client error', httpcode: 404, description: 'Producto no encontrado'}

        return product
    } catch (error) {
        throw error
    }
}

export const setNewProductService = async (title, description, code, price, stock, category)=>{
    try {
        const product = await productManager.addProduct(title, description, code, price, stock, category)

        if(!product) throw {name: 'client error', httpcode: 404, description: 'Error en crear producto nuevo service'}

        return product
    } catch (error) {
        throw error
    }
}

export const updateProductService = async (id, newData)=>{
    try {
        const updateProduct = await productManager.updateProduct(id, newData)

        if(updateProduct.length <= 0) throw {name: 'client error', httpcode: 500, description: 'Error en update product service'}

        return updateProduct
    } catch (error) {
        throw error
    }
}

export const deleteProductService = async (id)=>{
    try {
        const deleteProduct = await productManager.deleteProduct(id)

        return deleteProduct
    } catch (error) {
        throw error
    }
}