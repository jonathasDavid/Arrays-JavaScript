const notas = [10, 6.5, 8, 7.5]

const mediaDasNotas = notas.reduce ((acum,atual) => atual + acum, 0)

const media =  mediaDasNotas/notas.length

console.log(media)