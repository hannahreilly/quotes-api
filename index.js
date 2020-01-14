const express = require('express');
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const bodyParser = require('body-parser')

// import route from speaker router
const speakerRouter = require('./routes/speakerRouter.js');
// import route from quote router

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/speakers', speakerRouter);

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`); 
})