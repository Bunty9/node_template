const http = require(`http`);
const express = require(`express`);
const { Client } = require("pg");
const connectionString =
    "postgres://pfsdzxgm:5N01-Y-tOPsBNBE5XZb1nJmwpqW7vsE2@batyr.db.elephantsql.com/pfsdzxgm";

const client = new Client({
    connectionString: connectionString,
});

client
    .connect()
    .then(() => {
        console.log(`Connected to database`);
    })
    .catch((err) => console.log(err));

const port = `3000`;
var app = express();

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader(`Content-Type`, `text/plain`);
    res.end(`This is a simple nodejs application running on the port:${port}`);
});

app.get(`/first`, function (req, res) {
    var result = JSON.stringify({
        status: 200,
        message: "First Node JS Application",
    });
    res.send(result);
});

app.listen(port, function () {
    console.log(`Server is now running in the port:${port}`);
});
