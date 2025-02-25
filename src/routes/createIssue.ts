import express, { Router, Request, Response } from "express";
import axios from "axios";
import CryptoJS from "crypto-js";

import dotenv from "dotenv";
dotenv.config();

const router: Router = express.Router();

interface IssueBodyData {
  fields: {
    summary: string;
    issuetype: { name: string };
    project: { key: string };
    description?: string;
  };
}

router.post("/issue", async (req: Request, res: Response) => {
  const { domain, email, jiraToken } = req.body;
  const bodyData: IssueBodyData = req.body;
  const baseUrl: string = `https://${domain}.atlassian.net/rest/api/3`;
  const ciphertext: string = jiraToken;
  const secretKey: string =
    "6eb495a40e5f50b839fcfaa5e3e0d37b6bd17fbd887c4a1ac28f9d0eb25bde01";
  const bytes = CryptoJS.AES.decrypt(ciphertext, secretKey);
  const token: string = bytes.toString(CryptoJS.enc.Utf8);

  try {
    const response = await axios.post(`${baseUrl}/issue`, bodyData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(`${email}:${token}`).toString(
          "base64"
        )}`,
      },
    });

    res
      .status(201)
      .send(
        `Issue created successfully with key ${JSON.stringify(
          response.data.key
        )} and url ${JSON.stringify(response.data.self)}`
      );
  } catch (error: any) {
    console.error(error);
    res.status(500).send({
      message: `${JSON.stringify(error.response.data.errors)}`,
    });
  }
});

export default router;
