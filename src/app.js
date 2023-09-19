const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.resolve(__dirname,"public")));

app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname,"views/home.html"));
});
app.get('/register', (req, res)=>{
    res.sendFile(path.resolve(__dirname,"views/register.html"));
});
app.get('/login', (req, res)=>{
    res.sendFile(path.resolve(__dirname,"views/login.html"));
});


const port = process.env.PORT || 3000;  //si la variable de entorno viene, le asigna ese valor, sino toma el puerto 3000 (local).
app.listen(port, () => {
    console.log(`Servidor funcionando en: http://localhost:${port}`);
})

