import axios from "axios";
import jwt from "jsonwebtoken";
import { config } from '../../config';

const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret'

export const verifyHandler = async ({ body }: any) => {
  const { idToken } = body;

  if (!idToken) {
    return {
      message: "Missing idToken",
      status: 400
    };
  }

  try {
    const response = await axios.post(
      "https://api.line.me/oauth2/v2.1/verify",
      new URLSearchParams({
        id_token: idToken,
        client_id: config.LINE.LIFFID,
      }),
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );

    const lineUser = response.data;

    if (!lineUser.sub) {
      return {
        message: "Invalid LINE token",
        status: 401
      };
    }

    // Generate internal JWT
    const token = jwt.sign(
      { userId: lineUser.sub, name: lineUser.name },
      config.JWT.SECRET,
      { expiresIn: "7d" }
    );

    return {
      message: "Login verified",
      token,
      user: lineUser
    };

  } catch (error: any) {
    console.error("LINE Verify Error:", error?.response?.data || error);

    return {
      message: "LINE verification failed",
      status: 401,
      error: error?.response?.data || String(error)
    };
  }
};
