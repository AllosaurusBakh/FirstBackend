import express from "express";
import mongoose from "mongoose";
import router from "./Rrouter.js";
import fileUpload from "express-fileupload";

const PORT = 7482;
const DB_URL = 'mongodb+srv://root:1234@cluster0.vi03b33.mongodb.net/?retryWrites=true&w=majority';

const app = express();

app.use(express.json());
app.use(express.static('static'));
app.use(fileUpload({}));
app.use('/api', router);

async function startApp() {
    try {
        await mongoose.connect(DB_URL, { 
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        app.listen(PORT, () => console.log('SERVER PORT ' + PORT));
    } catch (err) {
        console.log(err);
    }
}

startApp();