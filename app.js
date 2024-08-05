import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";
import testRoute from "./routes/test.route.js"
import userRoute from "./routes/user.route.js";
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use("/api/posts", postRoute);
app.use("/api/auth", authRoute);
app.use("/api/test", testRoute);
app.use("/api/users", userRoute);
app.use('/api/work',(req,res )=>{
    res.send("i am working")
})
app.listen(3000,()=>{
    console.log(`server is running on port 3000`);
});

