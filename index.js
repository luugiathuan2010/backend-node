const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log("🚀 ~ file: index.js ~ line 6 ~ app.get ~ req", req)
    res.send("Hello world");
})

app.listen(4001, () => {
    console.log('Listening on http://localhost:4001');
})