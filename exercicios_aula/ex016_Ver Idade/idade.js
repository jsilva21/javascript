function calcidade() {
    let agora = new Date
    let ano = agora.getFullYear()

    let nasc = Number(window.prompt('Em que ano você nasceu?'))
    let idade = ano - nasc

    let saida = document.getElementById('saida')
    saida.innerHTML = `<p>Quem nasceu em ${nasc} vai completar/completou <strong>${idade}</strong> anos em ${ano}.</p>`
}
function zerar() {
    //let contador = 0
    saida.innerHTML = `<p>Tela limpa!</p>`
}