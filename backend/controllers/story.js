import Story from '../models/story.js';

export const createStory = async (req, res) => {
    const { userId, categoryId, dateCreated, audioSource, description, length } = req.body;
    const story = await Story({
        userId,
        categoryId,
        dateCreated,
        audioSource,
        description,
        length
    });
    await story.save();
    res.json({ success: true, story });
};