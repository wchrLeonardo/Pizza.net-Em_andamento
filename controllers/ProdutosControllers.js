import express from "express"
const router = express.Router()

//PRODUTOS
router.get('/produtos', function(req,res){
    const pizzas = [
        { img: "./imgs/pizzaAtum.jpg", sabor: "ATUM", preco: 31.50, ingredientes: ["Molho de tomate", "Queijo", "Atum", "Cebola", "Orégano"] },
        { img: "./imgs/pizza-brocolis.webp", sabor: "BRÓCOLIS COM BACON", preco: 36.00, ingredientes: ["Molho de tomate", "Queijo", "Brócolis", "Bacon", "Orégano"] },
        { img: "./imgs/calabresa.webp", sabor: "CALABRESA", preco: 30.00, ingredientes: ["Molho de tomate", "Queijo", "Calabresa", "Cebola", "Orégano"] },
        { img: "./imgs/pizzachocolatemorango.avif", sabor: "CHOCOLATE COM MORANGO", preco: 25.00, ingredientes: ["Chocolate", "Morango", "Leite condensado"] },
        { img: "./imgs/camarao.webp", sabor: "CAMARÃO", preco: 33.00, ingredientes: ["Presunto", "Queijo", "Tomate", "Azeitona preta", "ovo", "manjericão"] },
        { img: "./imgs/catupiry.jpg", sabor: "FRANGO COM CATUPIRY", preco: 35.00, ingredientes: ["Molho de tomate", "Queijo", "Frango desfiado", "Catupiry", "Orégano"] },
        { img: "./imgs/pizza-margherita.avif", sabor: "MARGHERITA", preco: 40.00, ingredientes: ["Molho de tomate", "Queijo", "Manjericão", "Tomate", "Orégano"] },
        { img: "./imgs/portuguesa.jpg", sabor: "PORTUGUESA", preco: 32.50, ingredientes: ["Molho de tomate", "Queijo", "Presunto", "Ovo", "Cebola", "Pimentão", "Azeitona", "Orégano"] },
        { img: "./imgs/4q.jpg", sabor: "QUATRO QUEIJOS", preco: 38.00, ingredientes: ["Molho de tomate", "Queijo Mussarela", "Queijo Gorgonzola", "Queijo Provolone", "Queijo Parmesão", "Orégano"] },
        { img: "./imgs/vegetariana.webp", sabor: "VEGETARIANA", preco: 35.00, ingredientes: ["Molho de tomate", "Queijo", "Tomate", "Cebola", "Pimentão", "Cogumelos", "Azeitona", "Orégano"] }
    ];
    
    res.render('produtos', {
        pizzas: pizzas
    })
})

export default router