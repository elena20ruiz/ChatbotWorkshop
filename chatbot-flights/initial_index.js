const functions = require('firebase-functions');
const { dialogflow } = require('actions-on-google');

// INTENTS

const app = dialogflow();


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

