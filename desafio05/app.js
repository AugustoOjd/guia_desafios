import express from 'express'
import productRouter  from './routes/product.routes.js'
import cartRouter from './routes/cart.routes.js'
import viewRouter from './routes/views.routes.js'
import { engine } from 'express-handlebars';
import http from 'http'
import {__dirname} from './dirname.js'
import {Server} from 'socket.io'
import { getProductsService} from './services/product.service.js'


const app = express()
const port = 8080



app.use(express.json())
app.use(express.urlencoded({extended: true}) )
app.use(express.static(__dirname + '/public'))

// views -----
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');

app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
app.use('/', viewRouter)


const httpServer = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const socketServer = new Server(httpServer)


socketServer.on('connection', async (socket) => {
  // console.log('a user connected');

  const products = await getProductsService()

  socket.on('message', data =>{
    console.log(data)
  })

  socket.emit('products', products)
});



