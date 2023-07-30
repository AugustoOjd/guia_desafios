import express from 'express'
import productRouter  from './routes/product.routes.js'
import cartRouter from './routes/cart.routes.js'

const app = express()
const port = 8080

app.use(express.json())
app.use(express.urlencoded({extended: true}) )

app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




