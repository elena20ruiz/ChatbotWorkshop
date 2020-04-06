const functions = require('firebase-functions');
const { dialogflow } = require('actions-on-google');

// INTENTS
const WELCOME_INTENT = 'Default Welcome Intent';
const FALLBACK_INTENT = 'Default Fallback Intent';


const app = dialogflow();

app.intent(WELCOME_INTENT, (conv) => {
  conv.ask('Welcome to Joke Chatbot! Ask for a joke. I will try to make you laught');
});


app.intent(FALLBACK_INTENT, (conv) => {
  conv.ask('Sorry I didin\'t understand you. Try to say: tell me a joke');
});



exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);

