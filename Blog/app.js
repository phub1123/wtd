const express = require ('express');

const app = express();

app.listen(3000);

app.get('/',(req,res) => {
    // res.send('<h1>Hello</h1>');
    res.sendFile('./view/home.html', {root: __dirname });
    console.log(__dirname);

});