const queue = require('./queue')

const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/add-job', (req, res) => {
  queue.add('test-job', {test: 12345})
  res.send('Add job')
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
