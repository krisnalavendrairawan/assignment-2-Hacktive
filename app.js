const express = require('express');
const app = express();
const router = require('./routers');
const port = 3000;

app.use(express.urlencoded({extended : true}));
app.use(express.json())

app.use(router)



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})