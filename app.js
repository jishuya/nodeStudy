const express = require('express');
const db = require('./models');

const { Member } = db;

const app = express();

app.use(express.json());

app.get('/', (req,res) => {
  res.sernd('URL should contain /api/...')
})


app.get('/api/members', async (req, res) => {
  const { team } = req.query;
  if (team) {
    const teamMembers = await Member.findAll( {
      where : {team},
      order: [['admissionDate', 'DESC']] 
    }); 
    res.send(teamMembers);
  } else {
    const members = await Member.findAll();
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


app.post('/api/members/', async (req, res) => {
  const newMember = req.body;
  // const member = Member.build(newMember);
  // await member.save();
  const member = await Member.create(newMember)
  res.send(member)
})

// app.put('/api/members/:id', async (req, res) => {
//   const { id } = req.params;
//   const newInfo = req.body;
//   const member = await Member.findOne({ where: { id } });
//   console.log({ newInfo });
//   if (member) {
//     Object.keys(newInfo).forEach((prop) => {
//       member[prop] = newInfo[prop];
//     });
//     await member.save();
//     res.send(member);
//   } else {
//     res.status(404).send({ message: 'There is no member with the id!' });
//   }
// });


app.put('/api/members/:id', async (req, res)=>{
  const { id } = req.params;
  const newInfo = req.body;
  const result = await Member.update(newInfo, { where : { id } });
  if (result[0]) {
    res.send({ message: `${result[0]} row(s) affected.` })
  } else {
    res.status(404).send({ message: `There is no member with this id.` });
  }
})


// app.delete('/api/members/:id', (req, res)=>{
//   const { id } = req.params;
//   const deletedCount = Member.destroy({ where : { id }});
//   if (deletedCount) {
//     res.send({ message : `${deletedCount} row(s) deleted.`})
//   } else {
//     res.status(404).send({ message: `There is no member with this id`})
//   }
// })

// 객체의 destroy 메소드 사용하기 
app.delete('/api/members/:id', async (req, res)=>{
  const { id } = req.params;
  const member = await Member.findOne({ where : { id } })
  if (member) {
    const result = await member.destroy();
    res.send({ message : '1 row(s) deleted' })
  } else {
    res.status(404).send( { message : `There is no member with this id.` })
  }
  
})


app.listen(porcess.env.PORT || 3000, () => {
  console.log('Server is listening...');
});
