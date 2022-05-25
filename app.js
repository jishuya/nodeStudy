const express = require('express');
const app = express();

app.use(express.json())

let students = [
  {
    id: 1,
    name: 'jiho',
    grade: 'A',
    emailAddress: 'minjihosu@google.com'
  },
  {
      id: 2,
      name: 'hyena',
      grade: 'A',
      emailAddress: 'hyena@google.com'
  },
  {
      id: 3,
      name: 'hewon',
      grade: 'B',
      emailAddress: 'hewon@google.com'
  },
  {
      id: 4,
      name: 'sera',
      grade: 'C',
      emailAddress: 'sera@google.com'
  },
]


app.get('/student', (req, res)=>{
  res.send(students)
})

app.delete('/student/:id', (req, res)=>{
  let { id } = req.params;
  let cnt = students.length;
  let student = []
  student = students.filter((el)=> 
    el.id !== Number(id)
  )
  students = student
  if (students.length < cnt){
    res.send(students)
  } else {
    res.status(404).send({ message : 'DELETE ERROR'})
  }
})

app.listen(3000, ()=>{
  console.log('Server is listening on port 3000...')
})