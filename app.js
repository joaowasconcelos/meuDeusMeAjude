const express = require("express");
const testeRoute = require('./src/route/route')

const app = express();

app.use(express.json());

app.use('/', testeRoute);

app.listen(3000, () => {
    console.log("Servidor respondendo na porta 3000");
});