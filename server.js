const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;



app.get('/', (req, res) => {
    res.send('hello world, here are the streaming turtles')
});



app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});

