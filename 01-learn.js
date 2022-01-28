const profile = {
    username: "ErickM",
    name: "Erick",
    surname: "Mireles",
    secondSurname: "Merchant",
    address: {
        street: "Palo Escrito",
        number: 10,
        longlat:{
            longitude: "11111",
            latitude: "00000",
        }
    },
    school:{
        name: "Universidad Tecnologica Emiliano Zapata",
    },
    phone: "7771234567",
    email: "erickmireles@utez.edu.mx",
    photo: "https://static.wikia.nocookie.net/villains/images/3/33/Memes_Girls.png/revision/latest?cb=20150228012124"
}

//nombre, primer apellido, segundo apellido
//correo electrónico, ubicacion (lon y lat)
//pintar photo

const save = () => {
    const{name, 
        surname,
        secondSurname, 
            address: {street, number, 
                longlat: {longitude, latitude}}, 
            school:{nameS}, 
        phone,
        email,
        photo} = profile;

    console.log(name); console.log(surname); console.log(secondSurname);
    console.log(email); 
    console.log(longitude); console.log(latitude);
    console.log(photo);

    const nombre = document.getElementById("nombre")
    nombre.innerHTML = `hola, ${name}`

    const apellido = document.getElementById("apellido")
    apellido.innerHTML = `${surname}`
    
    const apellido2 = document.getElementById("apellido2")
    apellido2.innerHTML = `${secondSurname}`

    const correo = document.getElementById("correo")
    correo.innerHTML = `${secondSurname}`

    const long = document.getElementById("long")
    long.innerHTML = `${longitude}`

    const lat = document.getElementById("lat")
    lat.innerHTML = `${latitude}`

    document.getElementById(
        "foto"
    ).innerHTML = `<img src="${foto}">`;

    
}





















/*
const name = document.getElementById("name").value
const username = document.getElementById("username").value

function save(){
}

const save = function(){
}

const save = () => {
    result.innerHTML = `hola, ${name} Tú usuario es: ${username}`
}
const jsonMovie = [
    {
        name: "Bob Esponja",
        createBy: "1999-05-12",
        author: "John Cena",
        address: {
            street: "Palo escrito",
            number: 8
        }
    },
    {
        name: "Spiderman",
        createBy: "2021-12-12",
        author: "Sony"
    }
] 

console.log(jsonMovie[0].name);




const petition = () =>{
    fetch('https://swapi.co/api/people/1/')
        .then(res => res.json())
        .then(({data:{username}, code, status}) =>{
            console.log(username);
            console.log(code);
            console.log(status);
        })
    .catch( err => console.error(err))
}
*/
