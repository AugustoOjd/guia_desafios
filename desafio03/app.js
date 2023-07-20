import express from 'express'
import userRouter  from './routes/product.routes.js'
const app = express()
const port = 8080

app.use(express.json())
app.use(express.urlencoded({extended: true}) )

app.use('/api/product', userRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




