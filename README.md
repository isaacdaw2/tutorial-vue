Bluuweb

Video 1: https://www.youtube.com/watch?v=GAQB7Y4X5fM&list=PLPl81lqbj-4J-gfAERGDCdOQtVgRhSvIT&index=1

video 3: https://www.youtube.com/watch?v=vK7JT3nUmFg&list=PLPl81lqbj-4J-gfAERGDCdOQtVgRhSvIT&index=3

video 4: https://www.youtube.com/watch?v=4sF1Kifpaqs&list=PLPl81lqbj-4J-gfAERGDCdOQtVgRhSvIT&index=4

Pasos:

- Creamos dos archivos, en este caso le pondremos de nombre listado.html y listado.js

- en listado.html ejecutamos la secuencia html:5 + tab para que nos implemente el esqueleto html

- Para unir ambos archivos, ejecutamos un script en el final del body de listado.html con src="listado.js"

- Vamos a Bootstrap > Get started > CSS, copiamos el stylesheet y lo pegamos dentro de nuestro head

- Vamos a Vue > Get Started, copiamos el script de la versión de desarrollo del CDN de Vue y lo pegamos en el final del body de nuestro proyecto.

- Para trabajar con Vue, lo primero que debemos hacer es crear un componente, aquí encerraremos todo su contenido. Cabe destacar que se puede utilizar todas las veces que queramos. Para ello creamos un <div> con id="app" (por ejemplo), seguidamente dentro del mismo ponemos un <h1> que va a decir "Listado de frutas".

- Vamos ahora al archivo listado.js, y procedemos a instanciar Vue, para ello creamos una constante con el nombre que queramos, por ejemplo app, y colocamos new Vue, luego ponemos parentesis y como estos van a recibir un objeto colocamos dentro unas llaves: const app = new Vue({}). Aquí estamos llamando a toda la libreria que copiamos en el script de Vue

- Tenemos ahora que detectar el <div> con id="app", para ello, dentro del objeto (de las llaves) ponemos el:'#app', de esta manera le decimos que todo lo que esté dentro va a gestionarse con vue. Al ser un objeto para proseguir colocamos una coma(,) y continuamos

- Ahora vamos a trabajar con los datos, estos se gestionan a traves de data:, aqui abrimos otro objeto, por tanto abrimos llaves, dentro de estas colocamos los datos que queramos, por ejemplo, colocamos titulo: 'Listado de frutas', en este punto ya podemos empezar a utilizar Vue en nuestro proyecto gracias a la interpolación, lo vemos, vamos al archivo listado.html y en el <h1> borramos lo que tenemos dentro y colocamos dobles llaves y dentro ponemos la propiedad que queremos llamar de dentro de data: {{titulo}}. De esta manera podemos comprobar que el "Listado de frutas" viene efectivamente desde Vue. Como apunte, aunque ahora estemos viendo un ejemplo de JS a html, también puede ser al contrario.

- Vemos otra funcionalidad de vue, nos colocamos en la consola, ejecutamos app.titulo y si a este le cambiamos el valor, por ejemplo app.titulo = "Listado de cosas" al pulsar enter se cambia también automáticamente en nuestro sitio web.

- Bueno, para continuar con nuestro objetivo final vamos a crear dentro de data un array con objetos de nombre 'frutas', para esto abrimos paréntesis cuadrados y cada uno de los objetos estará encerrado entre llaves, vamos a identificar en los objetos un nombre y como segunda propiedad la cantidad, asi: 
frutas: [
    {nombre: 'Pera', cantidad: 10}
]
Para poner más objetos dentro del array, es tan simple como separarlos con una coma(,)

- Vamos a visualizarlos en nuestro sitio web, para ello vamos a listado.html, y como frutas es un array lo tenemos que iterar, es decir, hacer un ciclo for para lea cada una de las propiedad que estan dentro. Colocamos un <ul> y un <li> y cada uno de estos ultimos queremos que visualize un item, ya sea pera, manzana... Bien, dentro del <li> utilizamos una de las propiedades de Vue, los loop, en este caso v-for, dentro de las comillas se declara el for, en nuestro caso ponemos un item (fruta, por ejemplo) luego 'of' y el nombre del array, en nustro caso es frutas. Esto significa que fruta va a ser interactivo dentro de frutas, fruta tomara el valor de cada uno de los valores dentro del array frutas. Bien, pues al igual que antes con el titulo, abrimos llaves dobles y colocamos dentro la variable dinamica fruta.cantidad para obtener la cantidad y fruta.nombre para obtener el nombre, así:
{{fruta.cantidad}} - {{fruta.nombre}}

- Aparte del ciclo for, también podemos hacer un if, y este condicional lo ponemos dentro del <li>, a través de un <span> que diga " - Sin Stock", así: <span> - Sin Stock</span>, pero este debería visualizarse solo cuando la cantidad sea 0, para esto dentro del span colocamos v-if="" y dentro de las comillas la condicional, que sería fruta.cantidad === 0, así: 
<span v-if="fruta.cantidad === 0"> - Sin Stock</span>, lo visualizamos.

- En el siguiente punto vamos crear una conexion desde el html a nuestro js, para esto vamos a utilizar un input, lo creamos debajo del <h1>, por defecto lo dejamos de tipo texto. Bien, ahora queremos que lo que escribamos en el input sea detectado o captado por vue, para esto necesitamos una propiedad llamada v-model, este nos permite hacer la conexion directa entre el input y js. Además, necesitamos hacer uso de algún metodo para poder procesarlo, vue tambien dispone de esto con su propiedad methods.

- Vamos a listado.js y dentro de data, debajo del array de frutas, ponemos una coma y un nuevo objeto llamado nuevaFruta de momento vacia, así: nuevaFruta: ''. Despues de la llave de cierre de data colocamos una coma(,) y utilizamos la palabra reservada de Vue llamada "methods", tambien será un objeto porque obviamente podemos pasar más de un metodo. aquí creamos una funcion llamada agregarFruta, y como queremos que al llamar a la función se agregue lo que escribimos en el <input>, tendremos que llamar al array frutas y hacerle un push.
Necesitamos en que en este push se inserte el nombre, que en este caso será 'nuevaFruta' y cantidad lo pondremos por defecto a 0. Lo hacemos de esta manera:
agregarFruta(){
    this.frutas.push({
        nombre: this.nuevaFruta, cantidad: 0
    })
}
*Nos va a saltar un error porque frutas no esta dentro de methods, sin embargo, Vue tiene implementado la palabra 'this' para acceder a todas sus propiedas y evitar este tipo de errores.

- Volvemos a listado.html, debajo del input creamos un <button> con valor "Agregar", dentro de la etiqueta de <button> gracias a Vue podemos trabajar con los eventos propios directamente, colocamos @click="" y dentro del parentesis llamamos a una funcion, en nustro caso agregarFruta. Bien, ahora necesitamos