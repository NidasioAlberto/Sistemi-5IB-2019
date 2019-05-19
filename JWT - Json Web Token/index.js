const express = require('express')
const jwt = require('jsonwebtoken')

const app = express()

app.use('/', express.static('website'))

app.get('/api', (req, res) => {
    res.json({
        messaggio: 'Benvenuto'
    })
})

app.post('/api/post', controlloToken, (req, res) => {
    res.json({
        message: 'Post creato',
        data: req.data
    })
})

app.post('/api/login', (req, res) => {
    const utente = {
        id: 1,
        username: 'Alberto',
        email: 'nidasioalberto@gmail.com'
    }
    jwt.sign(utente, 'chiave', {expiresIn: '1m'}, (err, token) => {
        res.json({token})
    })
})

//Controllo token
function controlloToken(req, res, next) {
    //Recuper il valore dell'header
    const header = req.headers['authorization']

    console.log(header)

    //Controllo l'header
    if(typeof header !== 'undefined') {
        //Recupero il token
        const token = header.split(' ')[1]

        console.log(token);

        //Lo controllo
        jwt.verify(token, 'chiave', (err, dati) => {
            if(err) {
                res.sendStatus(403)
            } else {
                req.data = dati
                next()
            }
        })
    } else {
        res.sendStatus(403)
    }
}

app.listen(80, () => console.log('Server avviato su porta 80'))