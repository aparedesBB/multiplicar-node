const opciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs').command('listar', 'Imprime la tabla de multiplicar', opciones).command('crear', 'Crea la tabla de multiplicar y la guarda en un archivo de texto', opciones).help().argv;

module.exports = {
    argv
}