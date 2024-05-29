import express from "express";

import {peca} from "../controller/crud_pecas.js";

let router = express.Router()
router.get('/peca', peca.select)
router.post('/peca', peca.create)
router.put('/peca/:id_peca', peca.update)
router.delete('/peca/:id_peca', peca.delete)
router.get('/peca/:nome_peca', peca.select_name)

export {router}