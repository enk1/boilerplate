const express = require('express');
const path = require('path');

const port = 3000;
const app = express();
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, err => {
    if(err) {
        console.error(err);
    } else {
        console.log(`Server is running on port = ${port}`)
    }
})