const container = document.getElementById("container")

const adicionaItem = (event) => {
    const newArticle = document.createElement("article")
    newArticle.innerHTML = "Sou novo por aqui"
    newArticle.classList.add("item")
    newArticle.setAttribute("onclick", "removeItem(event)")
    container.appendChild(newArticle)
}

const removeItem = (event) => {
    // const removeArticle = event.target
    // removeArticle.remove()
    event.target.remove()
    // container.removeChild(event.target)
}