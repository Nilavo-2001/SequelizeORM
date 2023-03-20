const express = require('express');
const create = require('./syncDb');
const { sequelize } = require('./models');
const port = 8000;
const app = express();
app.use(express.json());
app.use('/', require('./routes'));

app.listen(port, async function (err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log(`server running sucessfully on port: ${port}`);
        await sequelize.authenticate();
        console.log("Database connected");
    }
})