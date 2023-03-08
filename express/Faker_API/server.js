const express = require('express');
const app = express();
const port = 8000;

const faker = require('faker');

class Usuario {
    constructor() {
        this.id = faker.random.uuid();
        this.nombre = faker.name.findName();
        this.apellido = faker.name.lastName();
        this.telefono = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Empresa {
    constructor() {
        this.id = faker.random.uuid();
        this.nombre = faker.company.companyName();
        this.direccion = {
            calle: faker.address.streetName(),
            ciudad: faker.address.city(),
            estado: faker.address.state(),
            codigoPostal: faker.address.zipCode(),
            pais: faker.address.country()
        }
    }
}

app.get('/api/users/new', (req, res) => {
    res.json(new Usuario());
}
);

app.get('api/companies/new', (req, res) => {
    res.json(new Empresa());
}
);

app.get('api/user/company', (req, res) => {
    res.json(
        { 
        user: new Usuario(),
        company: new Empresa() 
    }
    );
}
);


