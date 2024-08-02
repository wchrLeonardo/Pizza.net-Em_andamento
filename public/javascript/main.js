function logar(){
    let logemail = document.getElementById('logEmail').value
    let logsenha = document.getElementById('logSenha').value
    if(logemail == 'leo@gmail.com' && logsenha == '1234'){
        window.location.href = '/produtos'
    }else{
        window.location.href = '/login'
    }
}

function cadastrarUsuario(){
    window.location.href = '/login'
}

