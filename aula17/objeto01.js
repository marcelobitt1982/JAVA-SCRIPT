let amigo = {nome: 'josé',
sexo: 'M',
peso: 85.4,
engordar(p){
   console.log('Engordou')
   this.peso += p
}}

console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)
