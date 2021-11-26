function info() {
    let meses = new Array('Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez')
    let semana = new Array ('Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado')
    let agora = new Date
    let saida = document.getElementById('saida')
    let dia = agora.getDate()
    let mes = agora.getMonth() // Jan = 0 | Fev = 1 | Mar = 2 e assim vai...
    let ano = agora.getFullYear()
    let sem = agora.getDay()  // Dom = 0 | Seg = 1 | Ter = 2 e assim vai...
    let hora = agora.getHours()
    let min = agora.getMinutes()
    let seg = agora.getSeconds()
    saida.innerHTML = `Dia: <mark>${dia}</mark> `
    saida.innerHTML += `Mês: <mark>${meses[mes]}</mark> `
    saida.innerHTML += `Ano: <mark>${ano}</mark>`
    saida.innerHTML += `<p>Dia da semana: <mark>${semana[sem]}</mark></p>`
    saida.innerHTML += `Hora: <mark>${hora}</mark> `
    saida.innerHTML += `Minutos: <mark>${min}</mark> `
    saida.innerHTML += `Segundos: <mark>${seg}</mark>`
}
function zerar() {
    //let contador = 0
    saida.innerHTML = `<p>Tela limpa!</p>`
}