import { Router } from "express";
import {createNewCartController, getCartByIdController, setProductToCart} from '../controllers/cart.controller.js'

const router = Router()


router.post('/', createNewCartController )

router.get('/:cid', getCartByIdController)

router.post('/:cid/product/:pid', setProductToCart)

export default router