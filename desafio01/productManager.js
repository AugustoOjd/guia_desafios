

class ProductManager {
    
    #products
    #title
    #description
    #price
    #thumbnail
    #code
    #stock

    constructor(){
        this.#products = []
        this.#title = ''
        this.#description = ''
        this.#price = ''
        this.#thumbnail = ''
        this.#code = ''
        this.#stock = ''

    }


    #gerateId(){
        const id = this.#products.length + 1
        
        const existsId = this.#products.includes(id)
        
        while (existsId == true){
            id + 1
        }

        return id
    }

    addProduct(title, description, price, thumbnail, code, stock){
        
        const validateCode = this.#products.find(c=> c.code == code)

        if(validateCode) return console.log(`Ya existe el code: ${code}`)

        const product = {
            id: this.#gerateId(),
            title,
            description,
            price,
            thumbnail,
            code, 
            stock
        }

        this.#products.push(product)
        return product
    }

    getProducts(){
        return this.#products
    }

    getProductById(id){
        const findProduct = this.#products.find(i=> i.id == id)
        if(!findProduct) return console.log('Not found')

        return findProduct
    }

}


const instance = new ProductManager()

instance.addProduct('new', 'neww', '123', 'link', '97', '10')
instance.addProduct('new2', 'neww2', '1233', 'link2', '9617', '12')
instance.addProduct('new2', 'neww2', '1233', 'link2', '961x7', '12')
// producto repetido para validar error
instance.addProduct('new2', 'neww2', '1233', 'link2', '961x7', '12')
// ------------------------------

console.log(instance.getProductById(2))

console.log(instance.getProducts())