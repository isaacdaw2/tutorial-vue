Bluuweb

Video 1: https://www.youtube.com/watch?v=GAQB7Y4X5fM&list=PLPl81lqbj-4J-gfAERGDCdOQtVgRhSvIT&index=1

video 3: https://www.youtube.com/watch?v=vK7JT3nUmFg&list=PLPl81lqbj-4J-gfAERGDCdOQtVgRhSvIT&index=3

video 4: https://www.youtube.com/watch?v=4sF1Kifpaqs&list=PLPl81lqbj-4J-gfAERGDCdOQtVgRhSvIT&index=4

<!-- Pasos:

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
Necesitamos que en este push se inserte el nombre, que en este caso será 'nuevaFruta' y cantidad lo pondremos por defecto a 0 (ya lo modificaremos más tarde). además, fuera del push, colocaremos this.nuevaFruta ='' para que se vuelva a poner el input vacio. Lo hacemos de esta manera:
agregarFruta(){
    this.frutas.push({
        nombre: this.nuevaFruta, cantidad: 0
    })
    this.nuevaFruta =''
}
*Nos va a saltar un error porque frutas no esta dentro de methods, sin embargo, Vue tiene implementado la palabra 'this' para acceder a todas sus propiedas y evitar este tipo de errores.

- Volvemos a listado.html, debajo del input creamos un <button> con valor "Agregar", dentro de la etiqueta de <button> gracias a Vue podemos trabajar con los eventos propios directamente, colocamos @click="" y dentro de las comillas llamamos a una funcion, en nuestro caso agregarFruta. 

- Bien, también necesitamos que si al introducir un texto nuevo y pulsamos la tecla enter (en vez de darle al botón agregar) se agregue al listado, para ello, dentro del input colocamos @keyup y luego la tecla que queremos ejecutar (hay muchas mas y en nuestro caso seria enter), así: @keyup.enter y cuando detecte enter queremos que llame a nuestra funcion de agregarFruta, por tanto, quedaria asi: keyup.enter="agregarFruta".

- Hecho esto, ahora vamos a intentar modificar la cantidad del listado. Lo primero sería cambiar el fruta.cantidad a un input, de esta manera lo hacemos dinámico y podremos jugar con el valor. Bien, entre las etiquetas <li> y <span> agregamos un input de tipo numérico y para que muestre el valor utilizamos la propiedad v-model con el valor de fruta.cantidad, quedaría así: <input type="number" v-model="fruta.cantidad">, además borramos la linea de {{fruta.cantidad}}, porque ya no la necesitamos ahí.

- Algo importante sucede con este último input, lo vemos, si modificamos el valor cero y ponemos por ejemplo 10 efectivamente se borra el span con texto "sin stock", sin embargo, si volvemos a poner un cero no aparece nuevamente el texo del span, y esto es lo que queremos. Esto pasa por lo siguiente, colocamos nuevamente el 10 como valor, vamos a la consola del navegador y llamemos a app.frutas, si damos enter se visualiza el arreglo, nos fijamos en la primera posición, en nuestro caso las peras, si pulsamos sobre cantidad efectivamente aparece un 10 de tipo numérico, si ahora vamos a la segunda posicion que serian las manzanas, pulsamos sobre cantidad y podemos comprobar que el valor esta encerrado entre comillas, esto quiere decir que es un string, por tanto cada cosa que agreguemos al los input van a ser string y esto no es lo que queremos porque lo que necesitamos es que cuando sea 0 en el v-if nos visualice "sin stock", además si son numéricos podriamos sumarlos. Solucionar este problema es muy sencillo, al v-model le agreamos un punto y le decimos que será de tipo numérico, asi: v-model.number="fruta.cantidad". Si volvemos a comprobar y modificamos los valores de la cantidad ya nos aparece el texto. Si revisamos nuevamente el arreglo en la consola podemos ver que ahora la cantidad es un número.

- Bien, realizado esto vamos a agregar un <button> para que al pulsarlo aumente la cantidad y otro para disminuirla. colocamos un <button> entre el {{fruta.nombre}} y el <span> y le ponemos como valor "+", dentro de este agregamos un @click="fruta.cantidad++", y otro para la resta con sus respecivos valores, quedaria así:
<button @click="fruta.cantidad++">+</button>
<button @click="fruta.cantidad--">-</button>

- Perfecto, ahora queremos recopilar el total de cantidades, es decir , la suma de todas. Lo primero es crear el valor total en data y lo inicializamos a cero, luego necesitamos una función para desarrollar la suma de las cantidades, esta la manejaremos fuera de los metodos, utilizaremos los computed, estos tambien son un arreglo. creamos la función sumarFrutas() y dentro colocamos this.total = 0, luego creamos un recorrido con for(fruta of this.frutas) y dentro de este decimos que this.total += fruta.cantidad. Fuera del for colocamos un return this.total. Este for se ejecutará cada vez que se detecte un cambio en cantidad sin necesidad de estar llamandolo, he aquí la gracia de los computed. 

Ahora necesitamos visualizar esto, vamos al listado.html y fuera del <ul> colocamos un <h4> y ponemos como valor TOTAL = y llamamos a la funcion creada anteriormente, así: {{sumarFrutas}}. lo comprobamos. -->