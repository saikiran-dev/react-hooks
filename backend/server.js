const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const PORT =  4000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/todos', { useNewUrlParser: true, useUnifiedTopology: true });
app.listen(PORT);