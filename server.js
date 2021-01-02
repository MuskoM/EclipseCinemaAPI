const fs = require('fs');
const express = require('express');
const  bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req,res) =>{
	res.send('Server with orders');
});

app.listen(7777, () => console.log("Server address http://192.168.8.124:7777"));

