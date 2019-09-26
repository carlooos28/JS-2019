// Metodo Fetch 
// Funciona con promesas, es soportado de manera nativa en los navegadores, 
// el cual soporta formatos AJAX, POST, REQUEST. 

let data

fetch("https://swapi.co/api/people/1/")
  .then(response =>  
	//Este response me regresa un JSON 
    response.json())
  .then(json => {
    data = json
    return fetch('https://swapi.co/api/planets/1/')
  })
  .then((response) => response.json())
  .then(json => {
    data.homeworld = json
    console.log(`${data.name} su merjor amigo es ${json.name}, código con FETCH`)
    console.log(`${data.name} su merjor amigo es ${data.homeworld.name}, codigo con igualdad de objeto con FETCH`)
  })
  .catch((err) => handleError(err))
  

// Async-await
// código en JavaScript de manera asíncrona, con async-await.

function handleError(err) {
  console.log(`Request failed: ${err}`)
}

async function getLuke() {
  try {
    const response          = await fetch('https://swapi.co/api/people/1/')
    const luke              = await response.json()
    const responseHomeworld = await fetch(luke.homeworld)
    luke.homeworld          = await responseHomeworld.json()
    console.log(`${luke.name} nació en ${luke.homeworld.name}`)
  } catch (err) {
    handleError(err)
  }
}

// Class en JavaScript
// Una funcionalidad agregada en EcmaScript 2015, 
// es poder escribir el constructor de los objetos 
// con el keyword class, podemos definir nuestro constructor 
// Sintaxis sugar

class Punto {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  moverEnX(x) {
    this.x += x
  }

  moverEnY(y) {
    this.y += y
  }

  distancia(p) {
    const x = this.x - p.x
    const y = this.y - p.y

    return Math.sqrt(x * x + y * y)
  }
}

const p1 = new Punto(0, 4)
const p2 = new Punto(3, 0)

console.log(p1.distancia(p2))
console.log(p2.distancia(p1))
p1.moverEnX(20)
console.log(p1.distancia(p2))
p2.moverEnY(-8)
console.log(p1.distancia(p2))


// Ejecutar una operación sobre todos los elementos del array,
// método  map

const data = (...numeros) => numeros.map(numero => numero * 3)

data(1,2,3,4,5)
