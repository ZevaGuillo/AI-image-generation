const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit:'50mb'}));

app.get('/',async (req, res) => {
    res.send('Hello world');
})

app.listen(8080, ()=> console.log('Server has started on port http://localhost:8080'))