const express = require('express');
const app = express();

const student = [
  {
    id: 1,
    name: 'jiho',
    class: 'A',
    emailAddress: 'minjihosu@google.com'
  },
  {
      id: 2,
      name: 'hyena',
      class: 'A',
      emailAddress: 'hyena@google.com'
  },
  {
      id: 3,
      name: 'hewon',
      class: 'B',
      emailAddress: 'hewon@google.com'
  },
  {
      id: 4,
      name: 'sera',
      class: 'C',
      emailAddress: 'sera@google.com'
  },
]

app.get('/', (req, res)=>{
  res.send('<h1>This is main page</h1>')
})

app.get('/student/:id', (req, res)=>{
  const { id } = req.params;
  const student = student[id]
  if (student) {
    res.send(student)
  } else {
    res.status(404).send({ message: 'Sorry, There is no such student..'});
  }
})

app.get('/student/')

app.listen(3000, ()=>{
  console.log('server is listening on port 3000..')
})