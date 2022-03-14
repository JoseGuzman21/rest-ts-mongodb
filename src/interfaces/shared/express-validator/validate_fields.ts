import { Request, Response, NextFunction } from 'express';
import { validationResult } from "express-validator";
import { badRequest } from '../../../features/routes/response';

export const validateFields = (req: Request, res: Response, next: NextFunction) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return badRequest(req, res, 'No se pudo completar la operacion', 'Fields is empty', errores.mapped());
    }
    next();
};