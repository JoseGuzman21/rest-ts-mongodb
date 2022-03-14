import { Router } from 'express';
import { check } from 'express-validator';
import { validateFields } from '../../../../shared/express-validator/validate_fields';
import { getUsers, getUser, addUser, updateUser, deleteUser }
    from '../controllers/UsersController';

const router = Router();

router.get('/', getUsers);
router.get('/:email', [
    check("email", 'El email es obligatorio').not().isEmpty(),
    validateFields
], getUser);

router.post('/', [
    check("name", 'El nombre es obligatorio').not().isEmpty(),
    check("email", 'El email es obligatorio').not().isEmpty(),
    check("password", 'El password es obligatorio').not().isEmpty(),
    validateFields
], addUser);

router.put('/:email', [
    check("email", 'El email es obligatorio').not().isEmpty(),
    check("name", 'El nombre es obligatorio').not().isEmpty(),
    validateFields
], updateUser);

router.delete('/:email', [
    check("email", 'El email es obligatorio').not().isEmpty(),
    validateFields
], deleteUser);

export default router;