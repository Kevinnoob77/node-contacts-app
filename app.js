import express from 'express';
import morgan from 'morgan';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import contactsRoutes from './routes/contacts.routes.js';
import authRoutes from './routes/auth.routes.js';

const app = express()

const __dirname = path.dirname(fileURLToPath(import.meta.url))

app.use(morgan('dev'))
app.use(express.json())

app.use('/api/', contactsRoutes)
app.use('/api/auth/', authRoutes)

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res) => res.status(404).json({
   message: 'Route does not exist'
}))

export default app
