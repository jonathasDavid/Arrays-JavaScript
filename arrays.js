// adicinando elemento ao array
const notas = [10, 6.5, 8, 7.5]
notas.push(7)

console.log(notas)

//calculando média

let media = ((notas[0]+notas[1]+notas[2]+notas[3])/ notas.length)
console.log(`A média é: ${media}`)

// retirando elemento do array
const nota = [10, 6.5, 8, 7.5]
nota.pop()
console.log(nota)

let media2 = ((nota[0]+nota[1]+nota[2])/nota.length)
console.log(`A média é: ${media2}`)

const nomes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 
'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo']
 
const sala1 = nomes.slice(0, nomes.length/2)
const sala2 = nomes.slice(nomes.length/2)

console.log(`Alunos da saça 1: ${sala1}`)
console.log(`Alunos da saça 2: ${sala2}`) 


