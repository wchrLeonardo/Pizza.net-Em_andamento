import express from "express"
const router = express.Router()

//PEDIDOS
router.get('/pedidos', function(req,res){
    const pedidos = [
        { img: "./imgs/pizza-brocolis.webp", nmr_pedido: 1527, preco: 185.00},
        { img: "./imgs/calabresa.webp", nmr_pedido: 1528, preco: 98.00},
        { img: "./imgs/catupiry.jpg", nmr_pedido: 1529, preco: 185.00},
        { img: "./imgs/pizza-margherita.avif", nmr_pedido: 1530, preco: 114.00},
        { img: "./imgs/4q.jpg", nmr_pedido: 1531, preco: 185.00},
        { img: "./imgs/vegetariana.webp", nmr_pedido: 1532, preco: 56.30}
    ]
    const data = new Date()
    const hora = data.getHours();
    const minutos = data.getMinutes();
    const segundos = data.getSeconds();
    const horaPedido = `${hora}:${minutos}:${segundos}`
    res.render('pedidos', {
        pedidos: pedidos,
        horaPedido: horaPedido,
    })
})
export default router