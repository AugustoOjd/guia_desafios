import { Router } from "express";
import { viewHome, viewRealTimeProduct} from '../controllers/view.controller.js'

const router = Router()


router.get('/', viewHome)

router.get('/realTimeProduct', viewRealTimeProduct)



export default router