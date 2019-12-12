const express = require("express");
const app = express();
const path = require("path");
const cors = require('cors');

app.use(cors());
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());

const port = 4001;
app.listen(port, () => {
    `Listening on port ${port}`;
});
