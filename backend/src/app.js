import express from 'express';
import morgan from 'morgan';
import routes from './routes/index.js';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

mongoose.connect("mongodb://localhost:27017/taskmanager", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");
    app.use(routes);

    app.use(function(req, res) {
        throw new Error("Not Found");
    });

    app.use((err, req, res, next) => {
        console.error(err.stack);
        res.status(404).send(err.message);
    })

    app.listen(8080, () => {
        console.log("Server is listening on port 8080");
    });
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
});