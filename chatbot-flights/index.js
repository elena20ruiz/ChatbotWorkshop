const functions = require('firebase-functions');
const { dialogflow } = require('actions-on-google');

// INTENTS
const VIAJE_INTENT = 'Viaje';
const VIAJE_INTENT_YES = 'Viaje - yes'
const app = dialogflow();

app.intent(VIAJE_INTENT, (conv) => {

    try {
        // Parametros obligatorios:
        const origen = conv.parameters.origen;
        const destino = conv.parameters.destino;
        const ida = conv.parameters.ida;
        const vuelta = conv.parameters.vuelta;

        if(!(origen in CIUDADES) || !(destino in CIUDADES)){
            conv.ask('Lo siento, no tengo codificadas estas ciudades. Pero puedes buscar los vuelos en https://www.google.com/flights?hl=es');
            return;
        }
        var code_origen = CIUDADES[origen];
        var code_destino = CIUDADES[destino];
        // Codificar fechas:
        // Origen:
        var ida_url = codificar_fecha(ida);
        var vuelta_url = codificar_fecha(vuelta)
        const URL = `https://www.skyscanner.es/transporte/vuelos/${code_origen}/${code_destino}/${ida_url}/${vuelta_url}/`
        conv.ask(`Genial! Puedes mirar los resultados de tu búsqueda en el siguiente enlace de Skyscanner: ${URL}`)

    } catch (error) {
        conv.ask(error);
    }

});




function codificar_fecha(f) {
    var fecha = f.split('T');
    fecha = fecha[0].split('-');
    fecha = fecha[0].slice(2) + fecha[1] + fecha[2];
    return fecha
}


const CIUDADES = {
    'Alicante': 'ALC',
    'Almeria': 'ALM',
    'Badajoz': 'BJZ' ,
    'Barcelona': 'bcn',
    'Bilbao': 'BIO',
    'Burgos': 'RGS',
    'Córdoba': 'ODB',
    'Girona': 'GRO',
    'Granada': 'GRX',
    'Ibiza': 'IBZ',
    'Gran Canaria': 'LPA',
    'Madrid': 'MAD',
    'Menorca': 'MAH',
    'Murcia': 'RMU',
    'Mallorca': 'PMI',
    'Sevilla': 'SVQ',
    'La coruña': 'LCG',
    'Zaragoza': 'ZAZ',
    'Santiago de Compostela': 'SCQ',
    'Paris': 'pari',
    'Marsella': 'MRS',
    'Londres': 'lond',
    'Berlin': 'berl',
    'Roma': 'rome',
    'Milan': 'mila'
}
exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);

