const admin = require("firebase-admin");
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

admin.initializeApp();
const db = admin.firestore();

const app = express();

app.use(cors());

app.get("/", async (req, res) => {
  const docSnapshot = await db
    .collection("naruto")
    .doc("O98zFcuMIQsegC7RSthn")
    .get();
  const data = docSnapshot.data();
  res.send(data);
});

exports.tpfaas = functions.https.onRequest(app);
