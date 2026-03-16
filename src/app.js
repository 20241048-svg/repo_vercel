//importamos la libreria
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'; // IMPORTANTE Importar 
import gruposroutes from './routes/gruposroutes.js'
import productosroutes from './routes/productos.routes.js'
import MsVsPEroutes from './routes/misvisroutes.js'
import preguntaroutes from './routes/preguntas.routes.js'//preguntas frecuentes
import ubiroutes from './routes/ubi.routes.js'//listado de ubicasiones 
import conEmpleados from'./routes/conEmpleado.routes.js' //Rutas para el reporte de empleados
import contactoRoutes from './routes/contacto.routes.js'; // Rutas para contacto

//crear el objeto de express para nuestra alicacion
const app=express();

//configuramos el acceso al archivo , .env
dotenv.config()

//definimos nuestro puerto  //sugierto 
const port= process.env.PORT || 3000

app.use(cors());
//definimos una peticion al servidor
// definimos un midlewere para poder implementar jaason en nuestra apo
app.use(express.json())


//AQUI SE ANADEN LAS RUTAS DE LOS CONTROLADORES, IMPORTANDO LOS CONTROLADORES Y DEFINIENDO LAS RUTAS PARA CADA UNO DE ELLOS, ESTO SE HACE EN LA CARPETA ROUTES, DONDE SE IMPORTAN LOS CONTROLADORES Y SE DEFINEN LAS RUTAS PARA CADA UNO DE ELLOS, LUEGO SE IMPORTAN LAS RUTAS EN ESTE ARCHIVO Y SE USAN CON EL MIDLEWERE app.use() PARA DEFINIR LAS RUTAS DE LA APLICACION, ASI SE ORGANIZA MEJOR EL CODIGO Y SE SEPARA LA LOGICA DE LOS CONTROLADORES DE LAS RUTAS, LO QUE HACE QUE EL CODIGO SEA MAS LIMPIO Y FACIL DE MANTENER.
// defonimos las rutas que voy a implementar
app.use('/api/grupos', gruposroutes)

app.use('/api/productos', productosroutes);

app.use('/api/preguntas', preguntaroutes);//preguntas frecuntes

app.use('/api/ubi', ubiroutes);//listado de ubi
app.use('/api/contacto', contactoRoutes); // Rutas para contacto
app.use('/api/conEmpleados',conEmpleados); 
app.use('/api/misvis', MsVsPEroutes);


app.get('/', (req, res)=>{
    res.send("Esta es mi primera vez se gentil")
})

export default app; //AGREGADO PARA DESPLIEGUE

if (process.env.NODE_ENV !== 'production') {
    app.listen(port, () => {
        console.log("Aplicacion corriendo en el puerto: " + port)
    })
}
//app.listen(port, ()=>{
  //  console.log("Aplicacion corriendo en el puerto: "+port)
  
//})