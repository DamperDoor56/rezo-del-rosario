// Regex para weas owo
const NEWLINES_MATCH = /\r\n|\n|\r/
    const NEWLINE = '\n'
    const RE_INI_KEY_VAL = /^\s*([\w.-]+)\s*=\s*(.*)?\s*$/
    const RE_NEWLINES = /\\n/g

    const parseBuffer = (bufferData) => {
        const obj = {}; 
        bufferData.toString().split(NEWLINES_MATCH).forEach((line, idx) => { // Pasa los datos a string, los separa buscando el patron de newlines
            const keyValueArr = line.match(RE_INI_KEY_VAL); // Busca la key y el valor a traves del patron de regex 'KEY=VAL' para asignarlos despues
            if(keyValueArr != null){
                const key = keyValueArr[1];
                // default undefined 
                let val = (keyValueArr[2] || '');
                const end = val.length -1; // marca el final xd
                //Chequea si las variables contiene texto entre comillas simples o normales
                const isDoubleQuoted = val[0] === '"' && val[end] === '"'; 
                const isSingleQuoted = val[0] === "'" && val[end] === "'";

                // si tiene comillas, las borra
                if(isSingleQuoted || isDoubleQuoted){
                    val = val.substring(1, end);
                }
                // Si tiene comillas dobles, expande las nuevas lineas
                if(isDoubleQuoted){
                    val = val.replace(RE_NEWLINES, NEWLINE);
                } else {
                // borra espacios blancos
                val = val.trim();
            }
                obj[key] = val; } 
            
        });
        return obj;
    }

    module.exports = {
        parseBuffer
    }