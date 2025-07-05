const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: process.env.PAYPAL_MODE || "sandbox", //sandbox or live
   client_id: process.env.PAYPAL_CLIENT_ID ||"AQFHj60eubFnVC7YUXhNuc5lCLk5a8_kIRherWWg9ymoAMGWc8ywd8dXLFCe8Hg38mk2xmfrGigsJvkh",
  client_secret: process.env.PAYPAL_CLIENT_SECRET || "EJOxTLlFvLH4bAHT82p4HUoT-OA24pDpqhakUxYGtL4sYKJzt6SPUorouZc2x7IQwhw9yINyquy1ysKK",
});

module.exports = paypal;
