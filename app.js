const express = require('express');
const app = express();
const session = require('express-session');

app.use(express.static(__dirname + '/static'));
app.use(session({ secret: 'codingdojorocks' }));
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

app.get('/', (req, resp) => {

    if (!req.session.counter) {
        req.session.counter = 1;
    } else {
        req.session.counter++;
    }

    resp.render('index', { counter: req.session.counter });

})

app.get('/sumarDos', (req, resp) => {
    req.session.counter += 1;
    resp.redirect('/');
})

app.get('/reiniciar', (req, resp) => {
    req.session.counter = -1;
    resp.redirect('/');
})

app.get('*', (req, resp) => {
    resp.render('404');
})

app.listen(8000, () => {
    console.log('listening on 8000');
})