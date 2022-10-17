const express = require('express');


const app = express();
app.listen(3000, () => console.log('http://localhost:3000/'));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));


const picturesRouter = require('./routes/index');
app.use('/api', picturesRouter);