const usuarios = [
    {
        login: 'admin',
        pass: 'admin'
    },
    {
        login: 'teste',
        pass: 'teste'
    },
]

let botao = document.getElementById('btnLogar')
botao.addEventListener('click',function logar(){
    let pegaUsuario = document.getElementById('usuario').value
    let pegaSenha = document.getElementById('senha').value
    let confereLogin = false

    for(let i in usuarios){
        if(pegaUsuario== usuarios[i].login){
            confereLogin = true
            break
        }            
    }
    
    if(confereLogin==true){
        location.href = 'index.html'
        alert('Redirecionando para a seleção de curso')

    }else{
        alert('Não autorizado')
    }
} )

