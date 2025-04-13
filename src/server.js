import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import ENVIROMENT from './config/enviroment.config.js';
import authRouter from './routes/auth.routes.js';
import workspace_router from './routes/workspace.router.js';
import channelRouter from './routes/channel.router.js';

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Middleware CORS configurado con credentials
app.use(cors({
    origin: ENVIROMENT.URL_FRONTEND, // ej: 'https://frontend-six-coral-49.vercel.app'
    credentials: true
}));

// Rutas de la API
app.use('/api/auth', authRouter);
app.use('/api/workspace', workspace_router);
app.use('/api/channels', channelRouter);

// Conexión a MongoDB y arranque del servidor

        app.listen(ENVIROMENT.PORT, () => {
            console.log("Server running on port", ENVIROMENT.PORT);
        });