import express, {Application} from 'express';
import dotenv from "dotenv";
import path from "node:path";

dotenv.config();

const app: Application = express();
const port = process.env.PORT || '3000';
const host = process.env.HOST || '::';
app.use(express.json())
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
    res.render('index.html')
});

app.listen(parseInt(port), host, () => {
    console.log(`Server is Fire at http://[${host}]:${port}`);
});