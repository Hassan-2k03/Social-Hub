const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;
const {MONGOURI} = require('./keys')

require('./models/user')

app.use(require('./routes/auth'))

mongoose.connect(MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected',()=>{
    console.log("connected to mongo")
})

mongoose.connection.on('error',(err)=>{
    console.log("err connecting",err)
})




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});