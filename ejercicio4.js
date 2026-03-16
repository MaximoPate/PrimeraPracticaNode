import fs from 'fs';

function escribirArchivo() {

    let dataStr = ""

    fs.readFile('entrada.txt', 'utf8', (err, data) => {
        dataStr = data;
    
        fs.writeFile('salida.txt', dataStr, function(err) {})
    
    })    

}
escribirArchivo();