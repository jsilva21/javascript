/*Caso eu queira saber a hora do sistema

var agora = new Date()
var hora = agora.getHours()
*/

var hora = 19
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12){
    console.log('Bom Dia!')
}else if (hora <=18){
    console.log('Bom Tarde!')
}else {
    console.log('Bom Noite!')
}