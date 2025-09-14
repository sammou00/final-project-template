import mongoose from 'mongoose';

const musicSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        artist: {
            type: String,
            required: true
        },
        // foreign key to User model
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }
    },
    { timestamps: true }
);

const Music = mongoose.model('Music', musicSchema);
export default Music;
