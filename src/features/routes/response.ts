import { Request, Response } from 'express';
import { ValidationError } from 'express-validator';
import { StatusCodes } from 'http-status-codes';

export const created = (req: Request, res: Response, message: string,
    body: any, statusCode = StatusCodes.CREATED) => {
    res.status(statusCode).json({
        error: false,
        status: statusCode,
        resp: 'success',
        message: message,
        data: body
    });
}

export const success = (req: Request, res: Response, message: string,
    body: any, statusCode = StatusCodes.OK) => {
    res.status(statusCode).json({
        error: false,
        status: statusCode,
        resp: 'success',
        message: message,
        data: body
    });
}

export const error = (req: Request, res: Response, message: string,
    messageError: string, statusCode = StatusCodes.INTERNAL_SERVER_ERROR) => {
    let statusMessage = message || 'Internal Server Error';

    res.status(statusCode).json({
        error: true,
        status: statusCode,
        resp: 'error',
        message: statusMessage,
        messageError: messageError
    });
}

export const badRequest = (req: Request, res: Response, message: string, messageError: string,
    data: Record<string, ValidationError>, statusCode = StatusCodes.BAD_REQUEST) => {
    let statusMessage = message || 'Internal Server Error';

    res.status(statusCode).json({
        error: true,
        status: statusCode,
        resp: 'error',
        message: statusMessage,
        messageError: messageError,
        errors: data
    });
}