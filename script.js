
function mostrarTela(idTela) {

    document.querySelectorAll('.tela').forEach(tela => {
        tela.classList.remove('ativa');
    });

    document.getElementById(idTela).classList.add('ativa');
}
