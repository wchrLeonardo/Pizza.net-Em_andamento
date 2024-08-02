import express from "express"
const router = express.Router()

//CLIENTES
router.get('/clientes', function(req,res){
    const clientes = [
        { img: "./imgs/user.png", nmr_pedido: 1527, numero: '(13)9954-5489', cpf: '547.589.248-25'},
        { img: "./imgs/user.png", nmr_pedido: 1528, numero: '(13)9568-5899', cpf: '645.465.588-02'},
        { img: "./imgs/user.png", nmr_pedido: 1529, numero: '(13)9484-6443', cpf: '789.266.445-22'},
        { img: "./imgs/user.png", nmr_pedido: 1530, numero: '(13)8864-4869', cpf: '567.589.564-88'},
        { img: "./imgs/user.png", nmr_pedido: 1531, numero: '(13)8631-4823', cpf: '963.558.482-00'},
        { img: "./imgs/user.png", nmr_pedido: 1532, numero: '(13)4861-4542', cpf: '547.954.255-55'},
    ]
   
    res.render('clientes', {
        clientes: clientes
    })
})
export default router