import express from "express"
const app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'))

import ProdutosControllers from "./controllers/ProdutosControllers.js"
import PedidosControllers from "./controllers/PedidosControllers.js"
import ClientesControllers from "./controllers/ClientesControllers.js"
app.use("/", ProdutosControllers)
app.use("/", PedidosControllers)
app.use("/", ClientesControllers)

app.listen(8080, function(erro){
    if(erro){
        console.log('Ocorreu um erro!')
    }else{
        console.log('Servidor iniciado com sucesso')
    }
}
)
//INDEX
app.get('/',(req, res)=>{
    res.render('index')
})
//LOGIN
app.get('/login', (req, res)=>{
    res.render('login')
})
//CLIENTES
app.get('/clientes', (req,res)=>{
    res.render('clientes')
})
