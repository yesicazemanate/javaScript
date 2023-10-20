
let elementos = ''
let count = 1
for (let i = 0; i < 20; i++) {
   fetch("https://pokeapi.co/api/v2/pokemon/"+ count +"/")
   .then(pokemon => {
       return pokemon.json()
   })
   .then (result=>{
        fetch('https://pokeapi.co/api/v2/pokemon')
        .then(response => {
            return response.json();
        })
        .then(data => {
    elementos +=`<div class="div"> <img src="${result.sprites.back_default}"> 
        <p>${data.results[i].name}</p>
        </div>`; 
        document.getElementById('posts').innerHTML = elementos;
            })
   })
   count+=1
}



