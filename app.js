const express = require('express');
const members = require('./members');

const app = express();

app.use(express.json());


app.get('/api/members', (req, res) => {
  const { team } = req.query;
  if (team) {
    const teamMembers = members.filter((m) => m.team === team);
    res.send(teamMembers);
  } else {
    res.send(members);
  }
});

app.get('/api/members/:id', (req, res) => {
  const { id } = req.params;
  const member = members.find((m) => m.id === Number(id));
  if (member) {
    res.send(member);
  } else {
    res.status(404).send({ message: 'There is no such member' });
  }
});

app.post('/api/members', (req, res) => {
  const newMember = req.body;
  members.push(newMember);
  res.send(newMember);
});


app.put('/api/members/:id', (req, res) =>{
  const { id } = req.params;
  const newInfo  = req.body;
  const member = members.find((m) => m.id === Number(id))
  if (member) {
    console.log(newInfo)
    console.log(typeof(newInfo))
    console.log("before member: ", member)
    Object.keys(newInfo).forEach((prop) => {
      member[prop] = newInfo[prop]
    })
    res.send(member);
    console.log("after member:", member)
  } else {
    res.status(404).send({ message: 'There is no memeber with the id' })
  }
})


app.listen(3000, () => {
  console.log('Server is listening...');
});
