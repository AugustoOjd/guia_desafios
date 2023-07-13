import ProductManager from "./managers/ProductManager.js"
import { dirname } from 'path';
import { fileURLToPath } from 'url';

// Dirname esta aplico para mejorar la lectura cuando usamos import/export
const __dirname = dirname(fileURLToPath(import.meta.url));

const productManager = new ProductManager(__dirname + '/data/products.json', __dirname + '/data/count.txt')


// await productManager.addProduct('new title', 'new description', 321, 'link img', 'md12', 12)
// await productManager.addProduct('new title', 'new description', 321, 'link img', 'md1sad2', 12)
// await productManager.addProduct('new title', 'new description', 321, 'link img', 'mdxcdx2', 12)


// console.log(await productManager.getProducts())  
// console.log(await productManager.getProductsById(6))
// console.log(await productManager.updateProduct(2, {title: 'new title 2'}))
// console.log(await productManager.deleteProduct(1))
