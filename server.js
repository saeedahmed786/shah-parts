const express = require('express');
const config = require('./config/keys');
const userRoutes = require('./routes/userRoutes');
const fileRoutes = require('./routes/fileRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const productRoutes = require('./routes/productRoutes');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

/******************************************  MiddleWares  ********************************************/
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(__dirname + '/uploads'));
app.use('/api/files', fileRoutes);
app.use('/api/users', userRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);

/******************************************  MongoDb Connection  ********************************************/

mongoose.connect(config.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDb Connected')).catch(err => console.log(err));


app.get("/server", (req, res) => {
    res.send("Server is running...")
})

app.listen(process.env.PORT || 8000, () => console.log('Listening to port 8000'));