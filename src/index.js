
/* Esta es la sintaxis de como esta en la ducumentacion
const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Hello world');
    }
);

app.listen(3000)

*/

// Sintaxis usando "tipe": "module", en el package.json

import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.send( "<h1>Hello world, Estoy practicando Node.js con Express</h1>");
    }
);
app.get('/about', (req, res) => {
    res.send( "<h1>about</h1>");
    }
);
app.listen(process.env.PORT || 3000)
console.log('Server on port ', process.env.PORT || 3000);


