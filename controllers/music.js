import Music from '../models/music.js';
const musicControllers = {
    getAllMusic: async (req, res) => {
        try {
            const musics = await Music.find();
            res.status(200).json(musics);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Internal server error' });
        }
    },
    addMusic: async (req, res) => {
        const { title, artist, userId } = req.body;

        try {
            if (!title || !artist || !userId) {
                return res
                    .status(400)
                    .json({ message: 'Title and artist are required' });
            }
            const newMusic = new Music({ title, artist, userId });
            await newMusic.save();
            res.status(201).json({
                message: 'Music added successfully',
                music: newMusic
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Internal server error' });
        }
    },
    getMusicByUser: async (req, res) => {
        const { id } = req.params;
        try {
            const musics = await Music.find({ userId: id });
            res.status(200).json(musics);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
};

export default musicControllers;
