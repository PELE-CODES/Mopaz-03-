const express = require("express")
const router = express.Router()
const mongoose = require("mongoose");
require("../models/Categorias")

const categoria = mongoose.model("categorias")

router.get('/', (req, res) => {
  res.render("./admin/index")
})

router.post("/categorias/nova", (req,res) => {
  const novaCategoria = {
    nome: req.body.nome,
    slug: req.body.slug
  }

  new categoria(novaCategoria).save().then(() => {
    console.log("Categoria salva com sucesso!")
  }).catch((err) => {
    console.log("Erro ao salva essa Categoria", + err)
  })
})

router.get('/posts', ( req, res) => {
  res.send('Pagina de posts')
})

router.get('/categorias', (req , res)  => {
 res.render('./admin/categoria')
})

router.get("/categorias/add", (req,res) => {
  res.render("admin/addcategorias")
})


module.exports = router