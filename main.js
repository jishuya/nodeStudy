// const menu = ['Pizza', 'Pasta', 'Steak', 'Salad', 'Soup']

// const http = require('http');
// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.end(`<h1>Welcome our restaurant!</h1>`);
//     } else if (req.url === '/menu') {
//         res.end(  `<h1>${menu}</h1>`)
//     } else {
//         res.end(`<h1>There is an error</h1>`)
//     }
// })


// server.listen(5000);

const menu = ['Pizza', 'Pasta', 'Steak', 'Salad', 'Soup']
const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.end(`<h1>Welcome our restaurant!</h1>`)
})

app.get('/menu', (req, res)=>{
    res.end(`<h1>${menu}</h1>`)
})

app.get('/menu/:food', (req, res)=>{
    const { food } = req.params
    console.log(food)
    // console.log(req.params.food)
    const foodName = menu[req.params.food -1];
    console.log(11111, foodName)  
    res.end(`<h1>${foodName}</h1>`)
})

app.get('*', (req, res)=>{
    res.end(`<h1>The page cannot be found.</h1>`)
})

app.listen(5000);