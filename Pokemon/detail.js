
let detalle = ''

fetch('https://pokeapi.co/api/v2/pokemon')
.then(response => {
     //console.log(response.json());
    return response.json();
})
.then(data => {
    console.log(data);
        
        detalle += `
        <p>ID = ${data.name}</p>
        <h3>${data.url}</h3>
        `; 
        console.log(data.name);
    
        document.getElementById('detail').innerHTML = detalle;
    })

