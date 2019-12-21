import express, { Request, Response } from 'express'
import { Test } from "./model/Test";

const app = express();

const model = new Test("Express App", 5);

app.get('/', (request: Request, response: Response) => {
    response.status(200).json(model);
});

const port: number = 3000;
app.listen(port, () => console.log(`Express server started on port ${port}`));
