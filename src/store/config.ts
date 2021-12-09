import { config } from 'dotenv';

export const SENDER_EMAIL = process.env.EMAIL_FROM;
export const PASSWORD = process.env.PASSWORD_EMAIL;
export const RECEIVER_EMAIL = process.env.EMAIL_TO;