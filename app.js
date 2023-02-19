const express = require('express'); //importar libreria

const app = express(); //Inicializar express

app.use(express.json()); // Para aceptar formato Json

const users = [
    {
        id: 1,
        name: "Aldo",
        email: "correo@correo.com",
        createdAt: "2023-01-01"
    },
    {
        id: 2,
        name: "Aldo2",
        email: "correo@correo.com",
        createdAt: "2023-01-01"
    },
    {
        id: 3,
        name: "Aldo3",
        email: "correo@correo.com",
        createdAt: "2023-01-01"
    }
]


app.get('/users/:id', (request, response) => {
    response.status(200).send(users[0]);
});

app.get('/', (request, response) => {
    response.status(200).send({message: 'Bienvenidos a la API RESTful de la Generacion 23a'});
  });


app.get('/users', (request, response) => { //Dando soporte a ruta users
    response.status(200).send(request.body);
});

app.post('/users', (request, response) => { //Dando soporte a ruta users
    console.log(request.body);

    if(Object.entries(request.body).length === 0){
        response.status(400).send('Error: Solicitud invalida')
    }

    const {name, email} = request.body;
    
    const newUser = {
        id: users.length + 1,
        name,
        email,
        createAt: "2023-02-17"
    }
    users.push(newUser);
    response.status(200).send(newUser);
});



app.listen(3000, ()=>{
    console.log('Servidor ejecutando en el puerto 3000');
});