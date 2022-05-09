const express = require('express');
const app = express();

app.use(express.json())

const students = [
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

app.post('/student', (req, res)=>{
  let newStudent = req.body;
  students.push(newStudent)
  res.send(newStudent)
})

app.get('/', (req, res)=>{
  res.send('<h1>This is main page</h1>')
})

app.get('/student', (req, res)=>{
  res.send(students)
})

app.get('/student/:id', (req, res)=>{
  const { id } = req.params;
  const student = students[id]
  console.log(student)
  if (student) {
    res.send(student)
  } else {
    res.status(404).send({ message: 'Sorry, There is no such student..'});
  }
})

// app.get('/student/', (req, res)=>{
//   const { grade } = req.query;
//   if(grade){
//     const selectGrade = students.filter((s)=>{return s.grade === grade})
//     res.send(selectGrade);
//   } else {
//     res.status(404).send({ message: 'Sorry, there is no such grade..' })
//   }
 
// })

app.listen(3000, ()=>{
  console.log('server is listening on port 3000..')
})