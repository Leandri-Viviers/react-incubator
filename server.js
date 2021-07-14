const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

// Routes
var dashboardRouter = require('./routes/dashboard');
app.use('/', dashboardRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));
