import { Router } from 'express';
import { check } from 'express-validator';
import { validateFields } from '../../../../shared/express-validator/validate_fields';
import { getPosts, getPost, addPost, updatePost, deletePost }
    from '../controllers/PostsController';

const router = Router();

router.get('/', getPosts);
router.get('/:title', getPost);

router.post('/', [
    check("title", 'El titulo es obligatorio').not().isEmpty(),
    check("url", 'La url es obligatorio').not().isEmpty(),
    check("content", 'El contenido es obligatorio').not().isEmpty(),
    check("img", 'La imagen es obligatorio').not().isEmpty(),
    validateFields
], addPost);


router.put('/:url', [
    check("url", 'La url del post es obligatorio').not().isEmpty(),
    check("content", 'El contenido es obligatorio').not().isEmpty(),
    check("img", 'La imagen es obligatorio').not().isEmpty(),
    validateFields
], updatePost);

router.delete('/:url', [
    check("url", 'La url del post es obligatorio').not().isEmpty(),
    validateFields
], deletePost);

export default router;