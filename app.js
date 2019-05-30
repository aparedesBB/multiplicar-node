const { crearArchivo, listarArchivo } = require('./multiplicar/multiplicar');
const { argv } = require('./config/yargs');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`Archivo ${archivo} creado con base ${argv.base} y límite ${argv.limite}`.random)).catch(err => console.log(err));
        break;

    case 'listar':
        listarArchivo(argv.base, argv.limite).then(resp => console.log(resp.rainbow)).catch(err => console.log(err));
        break;

    default:
        console.log('Esa madre no está permitida, lee la documentación con --help !!!!');
        break;
}

//console.log(argv);
//let base = process.argv[2].split('=')[1];