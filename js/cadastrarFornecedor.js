const BASE_URL = "http://localhost:3000/api/";
const myInputs = Array.from(document.getElementsByTagName("input"));

function pegarCamposFornecedor(){
  const fornecedor = {
    nomeRestaurante: myInputs[0].value,
    email: myInputs[1].value,
    telefone: myInputs[2].value,
    senha: myInputs[3].value,
    endereco: myInputs[4].value,
    bairro: myInputs[5].value,
    cidade: myInputs[6].value,
    cep: myInputs[7].value
  }

  enviarFornecedor(fornecedor);
}

function enviarFornecedor(fornecedor) {
  fetch(BASE_URL + "fornecedores", {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(fornecedor)

  }).then(resposta =>
    resposta.json().then(valor =>{
      tratarResposta(valor, resposta.status);
    }));
}

function tratarResposta(msg, status){
  if(status === 201){
    alert(msg.msg);
    window.location.assign('../pages/loginFornecedor.html');
  }

}


