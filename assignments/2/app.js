const express = require('express');

const app = express();

//To avoid favicon requests made to the root automatically by chrome
const faviconHandler = '<link rel="shortcut icon" href="data:image/x-icon;," type="image/x-icon">';


app.use('/users', (req, res, next) => {
    console.log("Layer 1");

    const response = faviconHandler + '<p>Users</p>';
    res.send(response);
});

app.use('/', (req, res, next) => {
    console.log("Layer 2");

    const response = faviconHandler + '<p>Response</p>';
    res.send(response);
});

app.listen(3000);