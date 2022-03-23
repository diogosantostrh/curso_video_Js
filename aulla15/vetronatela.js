let valores=[2,6,1,9,0.1]
valores.sort()
/*for (let pos = 0; pos < valores.length; pos++) {
    console.log(valores[pos])
    
}*/
for(let pos in valores){
    console.log(valores[pos])
}
console.log(valores.indexOf(9))