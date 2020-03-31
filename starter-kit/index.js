const functions = require('firebase-functions');
const { dialogflow, Image } = require('actions-on-google');
const axios = require('axios');

const TENOR_KEY = '2IPTXPNQV8XB';

// INTENTS
const WELCOME_INTENT = 'Default Welcome Intent';
const FALLBACK_INTENT = 'Default Fallback Intent';
const JOKE_INTENT = 'Joke';
const GIF_INTENT = 'Gif';

// ENTITIES
const  GIF_TOPICS_ENTITY = 'GifTopics';

const app = dialogflow();


app.intent(WELCOME_INTENT, (conv) => {
  conv.ask('Welcome to Joke Chatbot! Ask for a joke. I will try to make you laught');
});


app.intent(FALLBACK_INTENT, (conv) => {
  conv.ask('Sorry I didin\'t understand you. Try to say: tell me a joke');
});


app.intent(JOKE_INTENT, (conv) => {
  conv.ask('Van dos y se cae el del medio');
});


app.intent(GIF_INTENT, (conv) => {
  const gif_topic = conv.parameters(GIF_TOPICS_ENTITY);
  //Request by topic
  axios({
    baseURL: 'https://api.tenor.com/v1',
    method: 'get',
    url: '/search',
    params: {
      key: TENOR_KEY,
      q: gif_topic
    }
  })
  .then((res)=> {

  })
  .catch((err) => )
});

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);

