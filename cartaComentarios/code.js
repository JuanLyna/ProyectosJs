const express = require ("express");
const port = 3000; 

const app = express() ; //al ejecutar express() crea un servidor y lo guarda en app

app.get("/",(req,res)=>
{
    res.send("ps");
}
)// get recibe una peticion en el "/" (significa ruta inicial de mi pag,,pero puedes poner cualquiera) para ejecutar una funcion 

// app.get("/aboutthis",(req,res)=>

// {
// res.send(".../index.html") ; 
// }) //cree una nueva ruta 

app.listen (port , ()=>{
    console.log("server on port 3000");
})
