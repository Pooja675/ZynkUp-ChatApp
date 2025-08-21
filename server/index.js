import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import authRoutes from "./routes/AuthRoutes.js";
import contactsRoutes from "./routes/ContactRoutes.js";
import setupSocket from "./socket.js";
import messagesRoutes from "./routes/MessagesRoutes.js";
import channelRoutes from "./routes/ChannelRoutes.js";
import path from "path"

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const databaseURL = process.env.DATABASE_URL;
const _dirname = path.resolve()


// app.use(
//     cors({
//         origin: [process.env.ORIGIN],
//         methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
//         credentials: true,
//     })
// )

app.use(
  cors({
    origin:
      process.env.ORIGIN === "*"
        ? true
        : (process.env.ORIGIN || "http://localhost:5173").trim(),
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);


app.use("/uploads/profiles", express.static("uploads/profiles"))
app.use("/uploads/files", express.static("uploads/files"))

app.use(cookieParser());
app.use(express.json())

app.use("/api/auth", authRoutes)
app.use("/api/contacts", contactsRoutes)
app.use("/api/messages", messagesRoutes)
app.use("/api/channel", channelRoutes)

if(process.env.NODE_ENV == "production"){
    app.use(express.static(path.join(_dirname, "../zynkup/dist")))
}

app.get(/.*/, (req, res) => {
  res.sendFile(path.resolve(_dirname, "../zynkup/dist/index.html"));
});


const server = app.listen(port, () => {
  console.log(`Server is running at PORT number: ${port}`);
});

setupSocket(server)

mongoose
  .connect(databaseURL)
  .then(() => console.log("Database connection established successfully."))
  .catch((err) => console.log(err.message));
