function changeFontSize(factor) {
    let body = document.body;
    let currentSize = parseFloat(window.getComputedStyle(body).fontSize);
    let newSize = currentSize + factor;
    if (newSize >= 12 && newSize <= 22) {
        body.style.fontSize = newSize + 'px';
    }
}

function adicionarSecao() {
    let titulo = document.getElementById("titulo").value;
    let descricao = document.getElementById("descricao").value;
    
    if (titulo.trim() === "" || descricao.trim() === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }
    
    let novaSecao = document.createElement("section");
    let novoTitulo = document.createElement("h2");
    let novoParagrafo = document.createElement("p");

    novoTitulo.textContent = titulo;
    novoParagrafo.textContent = descricao;

    novaSecao.appendChild(novoTitulo);
    novaSecao.appendChild(novoParagrafo);
    
    document.getElementById("conteudo-dinamico").appendChild(novaSecao);
    document.getElementById("formulario").reset();
}