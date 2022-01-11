const express = require('express')
const app = express();
const members = require('./members');

app.get('/', (req, res) => {
    res.send('<h1>start page.... </h1>')
}); 


app.get('/api/members/:id', (req, res) => {
    const { id } = req.params;
    const member = members.find((m) => { return m.id === Number(id)});

    if(member) {
        res.send(member)
    } else {
        res.status(404).send({ message: 'There is no such member...' });
    }
})

app.get('/api/members/', (req, res) => {
    const { team } = req.query;
    if (team) {
        const teamMember = members.filter((m) => { return m.team === team});
        res.send(teamMember);
    } else {
        res.send(members)
    }
})

app.listen(3000, () =>{
    console.log('Server is listening')
})