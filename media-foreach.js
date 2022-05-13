// loop for atualizado
//MEDIA

const notas = [10, 6.5, 8, 7.5]

let somaDasNotas = 0

// callback
notas.forEach(nota => {
  somaDasNotas += nota
})

let media = somaDasNotas/notas.length

console.log(media)


// SOMA
// const numeros = [12, 14, 16, 18, 20]

// let somaDosNumeros = 0

// numeros.forEach( numero => {
//   somaDosNumeros += numero
// })

// let soma = somaDosNumeros

// console.log(soma)

// MEDIA DE 3 ARRAYS

// const notas1 = [10 , 6.5, 8 ,7.5]    //// 32
// const notas2 = [9  , 6  , 6]            ////21
// const notas3 = [8.5, 9.5]             ////18       

// const notasGerais = [notas1,notas2,notas3]

// let media = 0

// for (let i = 0; i < notasGerais.length; i++) {
//   for (let j = 0; j < notasGerais[i].length; j++) {
//     media += notasGerais[i][j]/notasGerais[i].length;
//   }
// }

// media = media/notasGerais.length
// console.log(media)