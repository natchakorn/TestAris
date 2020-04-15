const express = require('express')
const express = require('require')
const app = express()
const line = require('./component/Line')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.get('/', (req, res) => {
  res.send('Hello World')
})

line.init()

// app.post('/', (req,res) => {
//     const message = "TEST"
//     res.status(201).end()
// })

const request = require('request')

app.post('/lineNotify',(req,res) =>{
  res.json(req);
})
app.request({
  method: 'POST',
  uri: 'https://notify-api.line.me/api/notify',
  header: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  auth: {
    bearer: 'Ux39OCHDNfKomxVg8hDYrBXVCgSNacfhPPh5ULlQ40i', //token
  },
  form: {
    message: 'ทดสอบ', //ข้อความที่จะส่ง
  },
}, (err, httpResponse, body) => {
  if (err) {
    console.log(err)
  } else {
    console.log(body)
  }

app.listen(3001, () => {
  console.log('Start server at port 3000.')
})