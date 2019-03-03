const axios = require('axios');
// URL amigables

//Funcion para obtener el lugar y sus coordenadas
const getLugarLatLng = async(direccion) => {

    // Variable que formatea la url en amigable
    let encodedUrl = encodeURI(direccion);

    //Api de google donde le pasamos el encodeUrl para encontrar esas coicidencias del lugar.
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyC82QtpMIwd7MBkYFGWHufLowAVCR1TwCg`)

    if (resp.data.status === 'ZERO_RESULTS') {

        throw new Error(`No hay resultados para la ciudad ${direccion}`);

    }

    let location = resp.data.results[0];
    let coors = location.geometry.location;

    // console.log(JSON.stringify(resp.data, undefined, 2));
    //console.log('Dirección:', location.formatted_address);
    // console.log('Latitud:', coors.lat);
    // console.log('Longitud:', coors.lng);


    return {
        direccion: location.formatted_address,
        lag: coors.lat,
        lng: coors.lng

    }

}
module.exports = {

    getLugarLatLng
}