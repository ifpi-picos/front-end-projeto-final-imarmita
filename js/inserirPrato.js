function inserirItem(){
    console.log("entrrei")
    const inputsPrato = document.getElementById("inputsPrato");

    let newInput = document.createElement("INPUT");
    newInput.setAttribute("type", "text");
    newInput.setAttribute("placeholder", "Item do prato");
    inputsPrato.appendChild(newInput);
}

function pegarCampos(){
    
}