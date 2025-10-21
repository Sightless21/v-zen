import { Elysia } from "elysia";
import { PrismaClient } from "@prisma/client";
import {} from '../prisma/prismabox/Product'

const app = new Elysia().get("/", () => "Hello Elysia").listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
