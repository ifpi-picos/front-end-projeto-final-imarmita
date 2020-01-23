
const notificacao = document.getElementById("alert")
const BASE_URL = "http://localhost:3000/api/login"

function loginn(tipo){
    const user = pegarCampos(tipo);
    enviarAPI(user);

}

function pegarCampos(tipo){
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    
    const usuario = { 
        email: email,
        senha: senha,
        tipo: tipo
    }   
    return usuario
}

function enviarAPI(usuario){
    fetch(BASE_URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(usuario),
  }).then((resposta) => {
    if(resposta.status === 400){
        resposta.json().then(erroResposta => {
            mostrarNotificacao(notificacao,erroResposta.msg,false);
        })
    } else if( resposta.status === 200){
        resposta.json().then(body => {
            mostrarNotificacao(notificacao,body.msg,true)
            localStorage.setItem("usuarioLogado", JSON.stringify(body.usuario))
            setInterval(()=>{
                if(body.usuario.tipo === "cliente"){
                    window.location.assign("../pages/navegacaoCliente.html")
                } else if(body.usuario.tipo === "fornecedor"){
                    window.location.assign("../pages/navegacaoFornecedor.html")
                }
            },500);
            
        })
    } else{
        mostrarNotificacao(notificacao,erroResposta.msg,false);
    }
  })
}

function mostrarNotificacao(notificacao, mensagem,tipo){
    if(tipo){
        notificacao.setAttribute("class", "sucess notificacao")
    } else {
        notificacao.setAttribute("class", "fail notificacao")

    }
    
    const mensageText = document.createElement("p");
    mensageText.innerHTML = mensagem;
    notificacao.appendChild(mensageText)
    notificacao.style.display = "block";
}

function esconderNotificacao(notificacao){
    notificacao.style.display = "none";
}