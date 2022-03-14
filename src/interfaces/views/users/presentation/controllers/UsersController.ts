import { Request, Response } from 'express';
import { created, success, error } from '../../../../../features/routes/response';
import User from '../../domain/models/User';

export const getUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await User.find();

        return success(req, res, 'Users get success', users);

    } catch (err: any) {
        return error(req, res, 'Can not get users', err.message);
    }
}

export const getUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email } = req.params;

        const user = await User.findOne({ email }).populate('posts', '-__v -createdAt');

        return success(req, res, 'User get success', user);

    } catch (err: any) {
        return error(req, res, 'Can not get user', err.message);
    }
}

export const addUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const userAdded = new User(req.body);

        await userAdded.save();

        return created(req, res, 'User get success', userAdded);

    } catch (err: any) {
        return error(req, res, 'Can not add user', err.message);
    }
}

export const updateUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email } = req.params;
        const { name, posts } = req.body

        const userUpdated = await User.findOneAndUpdate({ email }, { name, posts }, { new: true });

        return success(req, res, 'Updated user success', userUpdated);

    } catch (err: any) {
        return error(req, res, 'Can not updated user', err.message);
    }
}

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email } = req.params

        await User.findOneAndDelete({ email });

        return success(req, res, 'Delete user success', {});

    } catch (err: any) {
        return error(req, res, 'Can not delete user', err.message);
    }
}


