import express, { Request, Response } from 'express';
import multer from 'multer';
import path from 'path';

const router = express.Router();

const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: (_req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({
    storage,
    fileFilter: (_req, file, cb) => {
        const ext = path.extname(file.originalname).toLowerCase();
        const allowed = ['.jpg', '.jpeg', '.png', '.gif', '.mp4', '.mov', '.avi', '.webm'];
        if (allowed.includes(ext)) cb(null, true);
        else cb(new Error('Only images and videos allowed'));
    }
});

/**
 * @swagger
 * /upload:
 *   post:
 *     summary: Upload a single image or video file
 *     consumes:
 *       - multipart/form-data
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: File uploaded successfully
 *       400:
 *         description: No file uploaded
 *       500:
 *         description: Server error
 */

router.post('/', upload.single('file'), async (req: Request, res: Response): Promise<void> => {
    const file = req.file;

    if (!file) {
        res.status(400).json({ error: 'No file uploaded' });
        return;
    }

    const ext = path.extname(file.filename).toLowerCase();
    const allowed = ['.jpg', '.jpeg', '.png', '.gif', '.mp4', '.avi', '.mov', '.webm'];

    if (!allowed.includes(ext)) {
        res.status(400).json({ error: 'Invalid file type. Only images and videos are allowed' });
        return;
    }

    const isImage = ['.jpg', '.jpeg', '.png', '.gif'].includes(ext);
    const isVideo = ['.mp4', '.avi', '.mov', '.webm'].includes(ext);

    res.status(200).json({
        message: 'File uploaded successfully',
        filename: file.filename,
        filepath: file.path,
        type: isImage ? 'image' : isVideo ? 'video' : 'unknown',
        mimetype: file.mimetype,
        size: file.size,
        timeUploaded: new Date().toISOString(),
    });
});


export default router;
