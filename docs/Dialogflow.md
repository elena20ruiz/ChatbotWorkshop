
# Crear un chatbot a partir de DialogFlow

Los pasos a seguir para crear un chatbot són los siguientes:
- Crear el diagrama de flujo del chatbot
- Crear un agente
- Crear un/varios intent/s
- Definir un/varios entity/ies
- (Opcional) Añadir un backend
- Integrar el chatbot

## 1. Crear un agente

Para crear un agente simplemente se le ha indicar:

- El nombre
- El idioma que queremos que utilize
- La franja horaria
- (Opcional) Enlazarlo con un proyecto de Google Cloud

![Create an agent with DialogFlow](images/createAgent.PNG | height=20)

Una vez creados, veremos que existen dos intents por defecto:
- **Default Fallback Intent**: Salta cuando el chatbot no ha interpretado ningún intent.
- **Default Welcome Intent**: Responde con un saludo.

Ambos no se pueden eliminar ya que se consideran esenciales para el flujo del chatbot.

## 2. Crear un intent

Al crear un nuevo intent, a parte de definir un nombre, nos encontramos con los siguientes apartados:

![Create an intent with DialogFlow](images/createIntent.PNG)

### Training Phrases

Las frases de entrenamiento son las frases con las que el chatbot se entrenará para indexar esas frases con el `intent` definido. De esta manera cuando el usuario escriba una frase similar identificará el intent concreto. 

Ejemplo de _training phrases:_

![Add training phrases to DialogFlow](images/trainingPhrases.PNG)

### Respuestas


En la creación de cada `intent` también hemos de indicar la respuesta que dará nuestro chatbot. Esta respuesta se realiza por dos razones:
1. Mostrar que el chatbot esta respondiendo a un input concreto del usuario.
2. Responder o dar la información que el usuario pide.

`!importante:`Existen muchas maneras poder dar formato a nuestras respuestas según el lugar donde se acabe integrando el chatbot. Todo y así en este workshop solo se aprofundirá en las respuestas de texto aleatorias. Pero si sientes curiosidad en formatear estas respuestas te recomiendo leer el siguiente [enlace](https://cloud.google.com/dialogflow/docs/intents-rich-messages)


En la sección de respuestas de `DialogFlow` puedes poner tantas entradas como desees. Si existe más de una DialogFlow escogerá una al azar para responder. Si observamos el siguiente ejemplo, existen varias respuestas para el mismo ejemplo.

![Text responses on DialogFlow](images/responses.PNG)

Existe la posibilidad que si tu chatbot necesita responder con más de una frase. (p. e. el primero al azar, el segundo fijo), entonces puedes añadir más respuestas dandolé al botón `ADD RESPONSES` -> seguido de -> `Text response`.

### Fulfillment

En el caso de que nuestro chatbot requiera de una lógica más compleja a la hora de responder o necesite una información de terceros, entonces podemos activar la opción de `fulfillment` (que se aprofundizará más a continuación), de manera que el intent no sacará una respuesta de está interfaz sino que llamará al backend que hemos implementado para recoger la respuesta de allí.

![Activate fulfillment on DialogFlow](images/fulfillment.PNG)

### Parametros

Existen diferentes casos en que detectar el `intent` de la frase no es suficiente y necesitamos hacer uso de los `parametros`. 

Un ejemplo común para entender el concepto de parametro sería:

```
Ponme una alarma a las 9.
```

El chatbot reconocería que la intención del usuario que seria la misma que si dijera:

```
Ponme una alarma a las tres y media.
```

En ambos casos el usuario quiere poner una alarma, la diferencia es la hora de la alarma. De esta manera necesitamos definir un parametro para tratar esta información.

Es posible que Dialogflow ya detecte por defecto los parametros que vamos a necesitar, todo y así es posible que tengan que ser modificados. Con este ejemplo solo queremos extraer la hora, todo y así Dialogflow nos ha detectado la hora y la palabra `una` como parametro a extraer. 


![Parameters on DialogFlow](images/parameters.PNG)

Como no nos interesa extraer esta información simplmenete eliminaremos de forma manual el tag de color amarillo.

De esta manera nos queda un único parametro que contiene la siguiente información:

![Actions on DialogFlow](images/action.PNG)

Se pueden añadir parametros manualmente pero al detectar Dialogflow este parametro se han puesto los anteriores valores por defecto. 

- **Required**: Indica si es necesario que el intent haya de tener ese parametro.
- **Parameter name**: Es el nombre del parametro con el que luego se accedera al contenido.
- **Entity**: El tipo de entidad que existen por defecto algunas entidades del sistema que se pueden elegir desde allí o si es necesario podemos crear uno personalizado (y que se explcará en los siguientes apartados).
- **Value**: Es el nombre del índice que se indexa en las frases de entrenamiento. (La o las palabras que estan subrayadas de un color).
- **Is list**

En resumen: **Definiremos un parametro para cada información variable que queremos guardar o tratar.**

### Contexto


### Parametros


## 3. Crear un entity

## 4. Implementar lógica del chatbot a partir del fulfillment

## 5. Entrenar el chatbot y testearlo

## 6. Integrarlo