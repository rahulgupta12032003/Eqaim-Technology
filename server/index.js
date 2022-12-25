const express = require('express');
const db = require('./db');
const blogRouter = require('./routes/blogRoutes')
const cors = require('cors')

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
    res.send("Hello this is Eqaim Assignment");
})

app.use("/api", blogRouter);

app.listen(port, () => {
   console.log(`Server started running on http://localhost:${port}`);
});