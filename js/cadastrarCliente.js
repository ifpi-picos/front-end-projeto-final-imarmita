const myInputs = Array.from(document.getElementsByTagName("input"));

function pegarCamposCliente() {
  const cliente = {
    nome: myInputs[0].value,
    email: myInputs[1].value,
    senha: myInputs[2].value
  };

  enviarCliente(cliente);
}

function enviarCliente(cliente) {
  fetch("http://localhost:3000/api/clientes/", {
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


  console.log(msg)
  if (status === 201) {
    const alert = document.getElementById("alert");

    alert.setAttribute("class", "sucess alert")
    const mensageText = document.createElement("p");
    mensageText.innerHTML = msg.msg;
    alert.appendChild(mensageText)
    alert.style.display = "block";
    alert(msg.msg);
    window.location.assign('../pages/login.html');
  } else {
    const alert = document.getElementById("alert");

    alert.setAttribute("class", "fail alert")
    const mensageText = document.createElement("p");
    mensageText.innerHTML = "Ocorreu um erro";
    alert.appendChild(mensageText)
    alert.style.display = "block";
  }
}