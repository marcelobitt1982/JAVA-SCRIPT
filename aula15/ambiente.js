let num = [5, 8, 2, 9, 3]
num[5] = 6  // criar mais um elemento na posição 3 que não existe
num.push(1)  // criar mais um elemento na ultima posição
num.length // quantas posiçoes tem
num.sort()  // colocar em ordem crescente

console.log(num)
console.log(`O vetor tem ${num.length} posiçoes`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
if (pos == -1){
    console.log('O valor não foi encontrado!')
} else {
   console.log(`O valor esta na posição ${pos}`) 
}

