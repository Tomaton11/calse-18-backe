import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

// ✅ CORS CONFIG - importante
const corsOptions = {
	origin: ['http://localhost:5173', 'https://frontend-six-coral-49.vercel.app'], // ⚠️ Asegurate de usar la URL real de tu frontend
	methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
	credentials: true
};

app.use(cors(corsOptions)); // ✅ esto debe ir antes que tus rutas
app.use(express.json());

// tus rutas:
import workspace_router from './routes/workspace.router.js';
import auth_router from './routes/auth.router.js';

app.use('/api/workspaces', workspace_router);
app.use('/api/auth', auth_router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
