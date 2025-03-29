import express from "express";
import cors from "cors";
import "dotenv/config"; // Ensure environment variables are loaded
import connectDB from "./config/mongodb.js";
import connectCloudnary from "./config/cloudnary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
// app config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudnary()
app.use(express.json());
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res.status(400).json({ success: false, msg: "Invalid JSON" });
    }
    next();
});

app.use(cors());
// api endpoints
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.get("/", (req, res) => res.status(200).send("Hello World"));
app.listen(port, () => console.log(`Listening on localhost:${port}`));
