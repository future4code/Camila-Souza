function botao(evento) {
    const container = document.getElementById("container-de-posts")
    const formulario = {
        titulo: document.getElementById("titulo-post"),
        autor: document.getElementById("autor-post"),
        conteudo: document.getElementById("conteudo-post"),
        imagem: document.getElementById("imagem-post")
        }
    const formTitulo = formulario.titulo
    const formAutor = formulario.autor
    const formConteudo = formulario.conteudo
    const formImagem = formulario.imagem
        if (formImagem.value.includes('.png')||formImagem.value.includes('.jpg')) {
            container.innerHTML += `<p>${formTitulo.value}</p>`+`<p>${formAutor.value}</p>`+`<img src=${formImagem.value}>`+`<p>${formConteudo.value}</p>`
        } else {
            container.innerHTML += `<p>${formTitulo.value}</p>`+`<p>${formAutor.value}</p>`+`<p>${formConteudo.value}</p>`
        alert("Post sem imagem")
        }
    const postSemImagem = [formTitulo.value, formAutor.value, formConteudo.value, "Sem imagem"]
    const postComImagem = [formTitulo.value, formAutor.value, formConteudo.value, formImagem.value]
        if (formImagem === "") {
            console.log(postSemImagem)
        } else {
            console.log(postComImagem)
        }
    
    formTitulo.value = ""
    formAutor.value = ""
    formConteudo.value = ""
    formImagem.value = ""

}
