const express = require('express');
const hbs = require('hbs');
var app = express();

const port = process.env.PORT || 3000

app.use((req,res,next)=>{
    next();
})

hbs.registerPartials(__dirname + '/views/partials')
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
})



hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
})
//handlers bar to handle the request......
app.set('view-engine', 'hbs');

app.get('/', (req, res) => {
    //res.send('hello World');
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        message: 'Welcome to Node App'
    })
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page'
    });
});



app.use(express.static(__dirname + '/public'));
app.listen(port, () => {
    console.log(`server started at port ${port}`);
});