import express from "express";
import ServerlessHttp from 'serverless-http';

const app = express();

const handler = ServerlessHttp(app);

module.exports.handler = async(event, context) => {
  const result = await handler(event, context);
  return result;
}