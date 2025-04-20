import express from 'express';
import dotenv from 'dotenv';
import uploadRoute from './routes/upload';
import path from 'path';
import { setupSwagger } from './swagger';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use('/upload', uploadRoute);

// Optional: Serve uploaded files statically
// app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

async function startServer() {
    try {
        // Test Prisma connection (optional)
        // await prisma.$connect();
        // console.log('✅ Connected to database');

        // ✅ Setup Swagger docs
        setupSwagger(app);

        app.listen(PORT, () => {
            console.log(`🚀 Server running at http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('❌ Failed to connect to the database', error);
        process.exit(1);
    }
}

startServer();
