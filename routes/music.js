import express from 'express';

import musicControllers from '../controllers/music.js';

import verifyToken from '../middleware/verifyToken.js';

const { getAllMusic, getMusicByUser, addMusic } = musicControllers;

const router = express.Router();

// routes
router.get('/music', getAllMusic);
router.get('/music/:id',  getMusicByUser);
router.post('/music', addMusic);

export default router;
