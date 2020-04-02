
# Chatbots

La gran ventaja de un chatbot es que nos permite tener una única interfaz para posibles diferentes aplicaciones. Además de poder integrarlo en diferentes plataformas.

## Herramientas para desarollar chatbots

Algunas de las herramientas más conocidas para desarrollar un chatbot rápidamente:

- DialogFlow (Google) [enlace](https://dialogflow.com/)
- Alexa (Amazon) [enlace](https://developer.amazon.com/es-ES/alexa)
- LUIS [enlace](https://azure.microsoft.com/es-es/services/cognitive-services/language-understanding-intelligent-service/) + BotFramework [enlace](https://dev.botframework.com/) (Microsoft)  

Esta documentación intenta explicar los conceptos de manera generica pero los ejemplos prácticos se basarán en la plataforma de Dialogflow.

## Conceptos importantes

### Agent / Skill

`Un agente de Dialogflow es un agente virtual que maneja conversaciones con los usuarios finales. Es un módulo de comprensión del lenguaje natural que entiende los matices del lenguaje humano` [[1]](https://cloud.google.com/dialogflow/docs/basics)

Este agente solo entenderá y dará respuesta a determinados intents (que serán explicado a continuación). Por ejemplo, Google Assistant y Alexa tienen integrados diferentes aplicaciones de terceros que solo entienden determinadas preguntas, de manera que en este contexto són llamados agentes.

Puedes descubrir todas las aplicaciones (también llamadas acciones o skills) de Google Assistant y Alexa en los siguientes enlaces:
- [Google Assistant](https://assistant.google.com/explore/?hl=en-US)
- [Alexa](https://www.amazon.es/b?ie=UTF8&node=13944662031)

### Intent 

`Un intent clasifica la intención del usuario final para un turno de conversación. Puedes definir varios intents para cada agente, de manera que, en conjunto, estos intents permitan manejar una conversación completa.`[[2]](https://cloud.google.com/dialogflow/docs/basics)

Algunos `intents` que nuestro agente puede tener por defecto són por ejemplo:
- _Intent de bienvenida_: Interpreta un saludo y puede responder con un saludo.
- _Intent de ayuda_: Interpreta que el usuario necesita ayuda sobre el agente y el agente responde en que le puede ayudar.
- _Intent de no entender_ o `fallback`: El agente no entiende el input del usuario y el agente lo expresa.

### Entities / Slots

Todo intent puede contenter un parametro, este parametro será intepretado a partir de su 'tipo de entidad' o 'slot'. El tipo de entidad puede definir conceptos genéricos como palabras o números, o más especificos como `nombre de ciudad`, `número de telefono`, `estado civil`.

## Flujo de interacciones

![Flujo de interacciones](https://cloud.google.com/dialogflow/docs/images/fulfillment-flow.svg)

### Interfaz del usuario

En la capa del usuario se gestionan estos tres aspectos:

1. Input

2. Output

3. Integración de la interfaz

### Interfaz del chatbot

En la capa del chatbot podemos encontrar los siguientes procesos:

1. Comprensión del texto: Detección de intent, parametros, entities ...

2. Lógica del chatbot: Según el contexto junto el intent detectado y posibles parametros se elige como responder o cambiar el estado.

3. (Opcional) Acceso a una aplicación externa: Es posible que para que el chatbot genere una respuesta necesite información externa de un backend propio o de una API de terceros. Por tanto, también existiria una conexión con este componente.
 