const express = require('express');
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.use(express.static('public')); // Serve CSS and static files

app.get('/', (req, res) => {
    res.render('home'); // Renders home.ejs
});

app.get('/about', (req, res) => {
    res.render('about'); // Renders about.ejs
});
app.get('/contact', (req, res) => {
    res.render('contact'); // Renders about.ejs
});
app.get('/getstarted', (req, res) => {
    res.render('getstarted'); // Renders about.ejs
});
app.get('/header', (req, res) => {
    res.render('header'); // Renders about.ejs
});
app.get('/footer', (req, res) => {
    res.render('footer'); // Renders about.ejs
});

app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});