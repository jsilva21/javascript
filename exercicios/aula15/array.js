let num =[5,9,2,8,3]

num.push(4) //Acrescenta o numero (no caso '1')  nos elementos OBS: Cuidado com a ordem
num.sort() //Ordena os valores dos elementos 
console.log(num) //exibe na tela os valores OBS caso queira mostra um valor especido do elemento basta = console.log(num[xk])
console.log(`Nosso Vetor tem ${num.length} posições`) //Saber quantidade de posições do Vetor
console.log(`O primeiro valor do Vetor é ${num[0]}`)//Mostra valor do vetor na posição 0
let pos = num.indexOf(8)
if(pos == -1){
    console.log(`o valor não foi encontrado!`)
}else {
console.log(`O valor está na posição ${pos}`)
}



/*
// Os valores são exibidos esem a formatação
let num =[1,9,0,8,5,6,4,3]
console.log(num)
*/