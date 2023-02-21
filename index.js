require('dotenv').config();
const express = require('express');
const cors = require("cors")
const bodyParser = require("body-parser")
const app = express();
const port = process.env.PORT;
const http = require("http")
const server = http.createServer(app)



app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.json())
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(express.static('css'))

require("./routes/allRoutes")(app)











// Listen on port
server.listen(port, () => {
    console.log(`Server up at http://localhost:${port}`);
});