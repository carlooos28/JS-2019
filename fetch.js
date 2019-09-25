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
  
