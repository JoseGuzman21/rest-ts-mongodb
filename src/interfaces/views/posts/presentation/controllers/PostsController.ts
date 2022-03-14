import { Request, Response } from 'express';
import { created, success, error } from './../../../../../features/routes/response';
import Post from '../../domain/models/Post';

export const getPosts = async (req: Request, res: Response): Promise<void> => {
    try {
        const posts = await Post.find();

        return success(req, res, 'Posts get success', posts);

    } catch (err: any) {
        return error(req, res, 'Can not get posts', err.message);
    }
}

export const getPost = async (req: Request, res: Response): Promise<void> => {
    try {
        const { title } = req.params;

        const post = await Post.findOne({ title });

        return success(req, res, 'Post get success', post);

    } catch (err: any) {
        return error(req, res, 'Can not get post', err.message);
    }
}

export const addPost = async (req: Request, res: Response): Promise<void> => {
    try {
        const postAdded = new Post(req.body);

        await postAdded.save();

        return created(req, res, 'Post get success', postAdded);

    } catch (err: any) {
        return error(req, res, 'Can not add posts', err.message);
    }
}

export const updatePost = async (req: Request, res: Response): Promise<void> => {
    try {
        const { url } = req.params;
        const { title, content, img } = req.body

        const postUpdated = await Post.findOneAndUpdate({ url }, { title, content, img }, { new: true });

        return success(req, res, 'Updated post success', postUpdated);

    } catch (err: any) {
        return error(req, res, 'Can not updated post', err.message);
    }
}

export const deletePost = async (req: Request, res: Response): Promise<void> => {
    try {
        const { url } = req.params

        await Post.findOneAndDelete({ url });

        return success(req, res, 'Delete post success', {});

    } catch (err: any) {
        return error(req, res, 'Can not delete post', err.message);
    }
}

