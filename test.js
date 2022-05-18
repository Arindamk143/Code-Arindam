const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 80;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'Template')) // Set the views directory
 

// ENDPOINTS
app.get('/', (req, res)=>{
    const con = "This is the best content on the internet so far so use it wisely"
    const params = {'title': 'PubG is the best game', "content": con}
    res.status(200).render('index.pug', params);
})


app.get('/About', (req, res)=>{
    res.status(200).render('about.pug');
})

app.get('/Contact', (req, res)=>{
    res.status(200).render('contact.pug');
})

app.get('/Projects', (req, res)=>{
    res.status(200).render('project.pug');
})

app.get('/Web-design', (req, res)=>{
    res.status(201).render('web-design.pug');
})

app.get('/Navbar', (req, res)=>{
    res.status(201).render('navbar.pug');
})

app.get('/Navbar2', (req, res)=>{
    res.status(201).render('navbar2.pug');
})

app.get('/Navbar3', (req, res)=>{
    res.status(201).render('navbar3.pug');
})

app.get('/Navbar4', (req, res)=>{
    res.status(201).render('navbar4.pug');
})
app.get('/Python', (req, res)=>{
    res.status(200).render('python.pug')
})
app.get('/Pygame', (req, res)=>{
    res.status(200).render('pygame.pug')
})
app.get('/Tkinter', (req, res)=>{
    res.status(200).render('temp/tkinter.pug')
})
app.get('/Calculator',(req, res)=>{
    res.status(200).render('temp/calculator.pug')
})


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });