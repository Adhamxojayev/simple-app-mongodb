const express = require("express");
const multer = require("multer");

const authRouter = require("./router/users.js");
const postRouter = require("./router/posts.js");

const Mongodb = require("./lib/mongoose.js");

Mongodb();

const app = express();

app.use(express.static(process.cwd() + "/src/uploads"))

// file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, process.cwd() + "/src/uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix  + "-" +  file.originalname.replace(/\s/g, ''));
  },
});

const upload = multer({ storage: storage });

app.use(express.json());
app.use(upload.single('image'))

app.use("/v1", authRouter);
app.use("/v1", postRouter);

app.listen(5000, () => console.log(`server run http://localhost:5000`));