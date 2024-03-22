const express = require('express')
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get('/', (req, res, next) => {
  res.sendFile(__dirname + '/web.html')
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})