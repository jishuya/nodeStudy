const express = require('express');
const db = require('./models');

const { Member } = db;

const app = express();

app.use(express.json());

app.get('/api/members', async (req, res) => {
  const { team } = req.query;
  if (team) {
    const teamMembers = await Member.findAll( {
      where : {team},
      order: [['admissionDate', 'DESC']] 
    }); 
    res.send(teamMembers);
  } else {
    const members = await Member.findAll({
      where : {team}
    });
    res.send(members);
  }
});

app.get('/api/members/:id', async(req, res) => {
  const { id } = req.params
  const member = await Member.findOne({ id })
  if(member) {
    res.send(member)
  } else {
    res.status(404).send({ message : 'Thre is no member with this id'})
  }
})


app.listen(3000, () => {
  console.log('Server is listening...');
});
