require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db.js');
const productRoutes = require('./routes/productRoutes');

connectDB();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
        res.json({ message: "API running..." });
    });

app.use('/api/products',productRoutes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server runing on port ${PORT}`));