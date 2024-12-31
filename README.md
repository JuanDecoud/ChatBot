# Challenge Chatbot IA

## Introducción

Esta aplicación está destinada a restaurantes y tiene como objetivo mejorar la experiencia de los clientes mediante la automatización de consultas comunes a través de un chatbot inteligente.

El sistema está compuesto por tres principales tecnologías:
•	Rasa: Framework utilizado para entrenar e implementar el chatbot.
•	Express.js: Backend que conecta el chatbot con el frontend y la base de datos, gestionando las peticiones.
•	React: Frontend que proporciona una interfaz intuitiva para que los usuarios interactúen con el bot.

## Estructura de la aplicación:

/backend -> API y lógica del servidor (Node.js, Express) 
/bot -> Chatbot basado en Rasa
/frontend -> Código del cliente (React) 


## Guía de instalación

Requerimientos previos para el Bot: 

## Descargar e instalar lo siguiente: 
[Python 3.8]: (https://www.python.org/ftp/python/3.8.0/python-3.8.0-amd64.exe)
[PostgreSQL]: (https://www.postgresql.org/download/)) 
[Visual c++ buildtools]: (https://visualstudio.microsoft.com/es/visual-cpp-build-tools/) :(instalar la opción para desarrollo de una aplicación de escritorio c++ , brinda las herramientas necesarias para que se pueda instalar rasa)

1-	Descargar el repositorio de github y extraerlo en el escritorio o donde mas prefieras.
2-	Abrir la Carpeta con Visual Studio Code
3-	Con el proyecto abierto en Visual , crear una nueva terminal  (se recomienda utilizar Bash) . 
3.1 – Situarse en la carpeta backend (comando: cd backend ) correr el comando “npm install” para instalar las dependencias necesarias, una vez instaladas las dependencias correr el servidor “npm run dev”. Tener en cuenta las variables de entorno, si estas no están correctamente configuradas el servidor no va a funcionar.
3.2 – Abrir una nueva terminal situarse en la carpeta del bot  “cd bot” . 
	3.2.1 –  ejecutar “pip install psycopg2-binary”
	3.2.1 – ejectuar “pip install --upgrade pip”
  3.2.3 – ejecutar “pip install rasa”
	3.2.4 – ejecutar “rasa run” -> esto iniciara el server de rasa por defecto :http://localhost:5005 - > con esta ruta se interactúa con el Bot.

El modelo ya se encuentra subido y entrenado para los requerimientos del desafío por lo no es necesario volver a entrenarlo.

4-	Por último, abrir una nueva terminal   situarse en el front end “cd frontend/chatbot” instalar las dependencias “npm install” y ejecutar el front “npm run dev” por defecto  la reta de acceso al front   http:localhost:5073/

## Endpoints:

Main url - > https://LocalHost:8080

### Productos: router para el manejo de los productos 
  Post: main/products/addProducts - >   Agrega nuevos productos a la carta
  Get: main/products/getProducts -> Se obtienen todos los productos que ofrece el restaurant
### Usuario: alta de Usuario y manejo de sessiones
  Post: main/user/addUser - >   End point para alta de usuario
  Post: main/user/auth ->  Se encarga de generar la sesión del usuario
### Pedidos: Gestiona los pedidos de los clientes
  Post: main/order/generateOrder - >   End point para alta del pedido
  Get: main/order/getOrders /:id- >   Se obtienen los pedidos  del cliente especificado por la id de la sesión.
### ChatBot: Gestiona la interacción del usuario con el bot
Post: main/chatbot/botResponse - >   se procesa el mensaje del usuario y el bot envia una respuesta, en base a la respuesta del bot el backend realiza un acción especifica

## Ejemplos de mensajes que entiende el bot:

### El  Bot interpreta el saludo y lo devuelve ejemplos:
Buenos días ¿Como estas? 
¡Hola! ¿Qué tal ‘? 
### Cuando el cliente pide el menú -> para este caso agregue varios ejemplos en los intent para el entrenamiento, por lo que entiende frases como: 
Que menú ofrecen ¿?
¿Podría saber el plato del día?
¿Podrías enviarme la carta?
### Cuando el cliente saluda y pide el menú en un mismo mensaje -> me pareció interesante indagar en este tipo de situaciones, entonces busque una forma de combinar un saludo con la solicitud de carta para que la conversación sea más realista
Ejemplos como:  
Buenos días. ¿qué menú ofrecen? - > el Bot responde con un saludo y el menú
Cuando los mensajes son fuera de contexto o que no entran en ninguno de los entrenamientos - > el Bot responde que no entiende el mensaje.
Ejemplos como: 
¿A qué hora pasa el colectivo?
### Pregunta frecuenta como en que horario esta abierto el restaurante -> el Bot responde con el horario habitual 
Ejemplo: 
¿Están abiertos?
### Cuando el cliente se despide ->   el Bot responde con un saludo de despedida
ejemplos: ¡Hasta luego, muchas gracias!, Chau, hablamos luego

El Bot tiene un entrenamiento básico y quizás algún plus en base a lo que se solicitó en el desafío, 
se puede entrenar mucho mas y abarcar muchas mas situaciones para que la conversación sea mas realista, 
Rasa brinda una herramienta muy potente y la conocí gracias a este desafío por lo que todavía hay muchas
mas cosas por investigar y mejorar y creo que es muy interesante y desafiante.

# Base De datos 

la bd viene cargado con un usuario por defecto : 
user : usuario@gmail.com
password : 1456 

La carga de productos se hace desde el formulario del frontend , y tambien se listan todos los productos que ofrece el restaurante 
Lo hice de esta manera para que sea mas entretenido a la hora de probar el bot
