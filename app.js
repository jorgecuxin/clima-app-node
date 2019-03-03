//const axios = require('axios');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

let getInfo = async(direccion) => {

    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coors.lag, coors.lng);

        return `El clima en ${coors.direccion} es de ${temp} centigrados.`;

    } catch (e) {

        return `No de pudo determinar el clima en ${coors.direccion}.`;

    }
}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));

//onsole.log(argv.direccion);
//Uso de funcion y pasandole parametro
/* lugar.getLugarLatLng(argv.direccion)
    .then(resp => {
        console.log(resp);
    })
    .catch(e => console.log(e)); */

/* clima.getClima(argv.direccion)
    .then(temp => {
        console.log(temp);
    })
    .catch(e => console.log(e)); */