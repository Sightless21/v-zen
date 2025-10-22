// src/index.ts
import { Elysia } from 'elysia'
import { auth } from './modules/auth'
import { cors } from './plugins'
import { config } from './config'

// ------------------------------------------------------------------
// 1️⃣ Create the *main* Elysia instance (the “app”)
// ------------------------------------------------------------------
const app = new Elysia({prefix: '/api/v1'})
  .get('/', () => 'Hello, Elysia!')
  // Global middlewares / plugins that should affect **all** routes
  .use(cors)               // <-- applied to every request
  // .use(logger)             // <-- a tiny request‑logger plugin
  // ----------------------------------------------------------------
  // 2️⃣ Mount feature modules (they already contain their own routes,
  //    models, and possibly scoped lifecycle hooks)
  // ----------------------------------------------------------------
  .use(auth)   // → /auth/*
  // .use(user)   // → /user/*

  // ----------------------------------------------------------------
  // 3️⃣ Anything that is truly “global” (e.g. a health‑check)
  // ----------------------------------------------------------------
  .get('/health', () => ({ status: 'ok' }))

// ------------------------------------------------------------------
// 4️⃣ Start listening
// ------------------------------------------------------------------
app.listen(config.SERVER.PORT, () => {
  console.log(`🚀 Server running on http://localhost:${config.SERVER.PORT}`);
});

// Export the app for tests (e.g. `app.handle(request)`)
export { app }