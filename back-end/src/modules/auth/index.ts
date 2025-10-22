import Elysia from "elysia";
import { verifyHandler } from "./service";
import { verifyModel } from "./model";

export const auth = new Elysia({ prefix: "/auth" })
    
    .post('/verify', verifyHandler, {body: verifyModel});
