let valores =[1,9,8,5,6,4,3]
/*
console.log(valores)

console.log(valores[0])
console.log(valores[1])
console.log(valores[2])


for (let pos=0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

*/
for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
