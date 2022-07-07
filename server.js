const express = require('express');
const app = express();
const server = require('http').createServer(app);
const api = require('./API/api')
const cors = require('cors')
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use("/nicroni", api)

app.get("/", (_, res) => res.end("NICRONI API"))

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))