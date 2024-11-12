require('dotenv').config()
const express = require('express');
const cors = require('cors');
const ConnectDb = require('./utils/db');
const router = require('./routes/route')


const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/",router)
ConnectDb();

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
