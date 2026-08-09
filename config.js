// Requiere el modulo de file system
// Para leer el env
const fs = require('fs'); // file system
    const path = require('path');
    const {parseBuffer} = require('./helpers/parse');

    // Funcion para obetner el env
    const getEnv = () => {
        const envPath = path.join(__dirname, '.env'); // nombre del directorio
        const bufferEnv = fs.readFileSync(envPath); // Leer el path con la libreria de File System
        const envObject = parseBuffer(bufferEnv); // Almacena temporalmente el dato de la direccion en un buffer

        Object.keys((envObject || {})).map(key =>{ // Chequea uno por uno los 'objetos' del archivo env
            if(!process.env[key] && process.env[key] !== envObject[key]){ // Y los compara con los solicitados?
                process.env[key] = envObject[key];
            }
        });

        const version = process.env.VERSION;
        const environment = process.env.ENVIRONMENT;
        const port = process.env.PORT;

        return {
            version,
            environment,
            port
        }
    }

    module.exports = {
        getEnv
    }