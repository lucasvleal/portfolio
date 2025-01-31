import type { NextApiRequest, NextApiResponse } from "next";
import { createTransport } from "nodemailer";

import { PASSWORD, RECEIVER_EMAIL, SENDER_EMAIL } from "../../store/config";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const transporter = createTransport({
    service: "Gmail",
    secure: true,
    auth: {
      user: SENDER_EMAIL,
      pass: PASSWORD,
    },
  });

  const { method } = request;

  if (method === "POST") {
    const { body } = request;
    const { emailBody } = body;

    const options = {
      from: SENDER_EMAIL,
      to: RECEIVER_EMAIL,
      subject: "Contato [via Portfolio]",
      html: emailBody,
    };

    try {
      await transporter.sendMail(options);

      return response.status(200).json({ ok: true });
    } catch (error) {
      console.log("Error sending email: ", error);
      return response.status(501).json({ ok: false });
    }
  }

  return response.status(400);
}
