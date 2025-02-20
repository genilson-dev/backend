import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface Payload {
    sub: string;
}

export function IsAuthenticated(req: Request, res: Response, next: NextFunction) {
    // Recebendo o token
    const authToken = req.headers.authorization;

    // Se o token não existir, pare aqui mesmo
    if (!authToken) {
         res.status(401).end();
    }

    const [, token] = authToken.split(" "); // Pegando o que estiver entre os espaços

    try {
        // Validando o token
        const { sub } = verify(token, process.env.JWT_SECRET) as Payload;

        // Recuperando o id do token e colocando a variável user_id dentro do request
        req.user_id = sub;

         next();
    } catch (error) {
         res.status(401).end();
    }
}
