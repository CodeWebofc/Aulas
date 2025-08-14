document.addEventListener('DOMContentLoaded', function () {
    // Seleciona elementos
    const form = document.getElementById('form-adic-tarefa');
    const inputTarefa = form.querySelector('input');
    const listaTarefas = document.getElementById('lista-tarefas');
    const tabelaStats = document.querySelector('tbody tr').children;

    // Função para atualizar contagem
    function atualizarContagem() {
        const total = listaTarefas.children.length;
        const pendentes = listaTarefas.querySelectorAll('.pendente').length;
        const concluidas = listaTarefas.querySelectorAll('.concluida').length;

        tabelaStats[0].textContent = total;
        tabelaStats[1].textContent = pendentes;
        tabelaStats[2].textContent = concluidas;
    }

    // Adicionar tarefa
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const texto = inputTarefa.value.trim();
        if (texto === '') return;

        const li = document.createElement('li');
        li.classList.add('pendente');
        li.innerHTML = `
            ${texto}
            <div>
                <button class="concluir">Concluir</button>
                <button class="deletar">Deletar</button>
            </div>
        `;

        listaTarefas.appendChild(li);
        inputTarefa.value = '';
        atualizarContagem();
    });

    // Delegação de eventos para concluir/deletar/desfazer
    listaTarefas.addEventListener('click', function (e) {
        if (e.target.classList.contains('concluir')) {
            const li = e.target.closest('li');
            li.classList.remove('pendente');
            li.classList.add('concluida');
            e.target.textContent = 'Desfazer';
            e.target.classList.remove('concluir');
            e.target.classList.add('desfazer');
        } 
        else if (e.target.classList.contains('desfazer')) {
            const li = e.target.closest('li');
            li.classList.remove('concluida');
            li.classList.add('pendente');
            e.target.textContent = 'Concluir';
            e.target.classList.remove('desfazer');
            e.target.classList.add('concluir');
        }
        else if (e.target.classList.contains('deletar')) {
            e.target.closest('li').remove();
        }
        atualizarContagem();
    });
});
