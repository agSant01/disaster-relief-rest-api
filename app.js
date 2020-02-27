const express = require('express');

const PORT = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) => {
    res.send({'msg':'this is a test'});
});

app.listen(PORT, () => console.log(`App is listening on POST: ${PORT}`))

