const nomes = [];

document.querySelector("#adicionarBtn").addEventListener("click", () => {
const nome = document.querySelector("#nomeInput").value;
if (nome === "") {
    alert("Por favor, digite um nome.");
    return;
}
nomes.push(nome);
atualizarLista();
document.querySelector("#nomeInput").value = "";
});

function atualizarLista() {
const ul = document.querySelector("#listaNomes");
ul.innerHTML = "";
nomes.forEach((n) => {
    const li = document.createElement("li");
    li.innerText = n;
    ul.appendChild(li);
});
}
