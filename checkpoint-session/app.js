import express from 'express'
import productRouter  from './routes/product.routes.js'
import cartRouter from './routes/cart.routes.js'
import userRouter from './routes/user.routes.js'
import session from 'express-session'
import {dbConnection} from './dao/db/configDb.js'
import cookieParser from 'cookie-parser'
import MongoStore from 'connect-mongo'
import passport from 'passport'
import initializePassport from './services/passport.service.js'

const app = express()
const port = 8080

app.use(express.json())
app.use(express.urlencoded({extended: true}) )
app.use(cookieParser())
app.use(session({
  store: MongoStore.create({
    mongoUrl: 'mongodb://127.0.0.1/coderhouse',
    ttl: 15
  }),
  secret: 'secretoCoder',
  resave: false,
  saveUninitialized: false,
  cookie: {maxAge: 60000}
}))

initializePassport()
app.use(passport.initialize())
app.use(passport.session())

app.use('/api/products', productRouter)
app.use('/api/carts', cartRouter)
app.use('/api/users', userRouter)


app.get('/', (req, res) => {
  res.send('Hello World!')
})







app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

await dbConnection()



