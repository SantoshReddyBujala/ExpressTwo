import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send('Hello Santosh from TypeScript and Express!');
});

app.get('/hi', (req, res) => {
    res.send('Hi Santosh Reddy Bujala');
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
