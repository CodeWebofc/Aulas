function validarFormulario() {
    let nome = document.getElementById("nome").value;
    if (nome === "") {
      alert("Preencha o nome!");
      return false;
    }
    return true;
  }

let frutas = ["Maçã", "Banana", "Laranja"];
console.log(frutas[0]); // Maçã

let aluno = {
  nome: "João",
  idade: 17
};

console.log(aluno.nome); // João
