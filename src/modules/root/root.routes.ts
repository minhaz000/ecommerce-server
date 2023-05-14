import express  from "express";
import * as RootController from "./root.controller"
const router = express.Router()

router.get('/', RootController.index)
router.get('/view', RootController.read)
export default router