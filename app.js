require('colors');
/* const Tarea = require('./models/tarea'); */
const Tareas = require('./models/tareas');

/* const { mostrarMenu, pausa } = require('./helpers/mensaje');
 */

const { inquirerMenu, pausa } = require('./helpers/inquirer');


const main = async() => {
    console.log('Hola Mundo');

    let opt = '';

    do {
       opt = await inquirerMenu();
       console.log({ opt });

     /*    const tarea = new Tarea('Comprar comida');
        console.log(tarea);
        const tareas = new Tareas();
        console.log(tareas); */
        

        if ( opt !== '0' ) await pausa();

    } while( opt !== '0' );

    /* pausa(); */
}

main();