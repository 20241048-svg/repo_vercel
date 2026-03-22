// ================= IMPORTACIONES =================
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

// ================= RUTAS =================
import gruposroutes from './routes/gruposroutes.js';
import productosroutes from './routes/productos.routes.js';
import MsVsPEroutes from './routes/misvisroutes.js';
import preguntaroutes from './routes/preguntas.routes.js';
import ubiroutes from './routes/ubi.routes.js';
import conEmpleados from './routes/conEmpleado.routes.js';
import contactoRoutes from './routes/contacto.routes.js';
import ubicacionesRoutes from './routes/ubicaciones.routes.js';

// ================= APP =================
const app = express();

// ================= CONFIG =================
dotenv.config();
const port = process.env.PORT || 3000;

// ================= CORS (ARREGLADO) =================
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

// 🔥 NECESARIO PARA PREFLIGHT (Vercel)
app.options('*', cors());

// ================= MIDDLEWARE =================
app.use(express.json());

// ================= RUTAS =================
app.use('/api/grupos', gruposroutes);
app.use('/api/productos', productosroutes);
app.use('/api/preguntas', preguntaroutes);
app.use('/api/ubi', ubiroutes);
app.use('/api/contacto', contactoRoutes);
app.use('/api/conEmpleados', conEmpleados);
app.use('/api/misvis', MsVsPEroutes);
app.use('/api/ubicaciones', ubicacionesRoutes);

// ================= TEST =================
app.get('/', (req, res) => {
    res.send("API funcionando correctamente 🚀");
});

// ================= EXPORT =================
export default app;

// ================= SERVER LOCAL =================
if (process.env.NODE_ENV !== 'production') {
    app.listen(port, () => {
        console.log("Servidor corriendo en puerto: " + port);
    });
}