import { cors as corsplugin } from "@elysiajs/cors";

export const cors = corsplugin({
  origin: ["http://localhost:5173", "https://v-zen.vercel.app"],
  methods: ["GET", "POST", "OPTIONS"],
  credentials: true,
});
