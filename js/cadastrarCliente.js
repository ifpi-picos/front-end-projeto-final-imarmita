const myInputs = Array.from(document.getElementsByTagName("input"));
const BASE_URL = "http://localhost:3000/api/"

function pegarCamposCliente() {
  const cliente = {
    nome: myInputs[0].value,
    email: myInputs[1].value,
    senha: myInputs[2].value
  };

  enviarCliente(cliente);
}

function enviarCliente(cliente) {
  fetch(BASE_URL + "clientes", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(cliente),

  }).then(resposta =>
    resposta.json().then(valor => {
      tratarResposta(valor, resposta.status);
    }));
}

function tratarResposta(msg, status) {
  if(status === 201){
    alert(msg.msg);
    window.location.assign('../pages/navegacaoCliente.html');
  }
}