
require('dotenv').config(); // Load environment variables
const saltRounds = 10;
const path = require('path');
const express = require('express');
const session = require('express-session');
const sqlm = require('./sqlm.js');

//const db = sqlm.db;

const app = express();
const bcrypt = require('bcrypt');



const staticPath = path.join(__dirname, 'public');
app.use(express.urlencoded({ extended: true })); // To parse urlencoded parameters
app.use(express.json()); // To parse JSON bodies
/*
// Rute for innlogging
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    
    // Finn brukeren basert på brukernavn
    const user =  //hent bruker fra databasen basert på brukernavn
    
    if (!user) {
        return res.status(401).send('Ugyldig brukernavn eller passord');
    }

    // Sjekk om passordet samsvarer med hash'en i databasen
    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
        // Lagre innloggingsstatus i session
        req.session.loggedIn = true;
        req.session.username = user.username;
        return res.send('Innlogging vellykket!');
    } else {
        return res.status(401).send('Ugyldig brukernavn eller passord');
    }
});
*/
app.get('/', (req, res) => {
    res.sendFile(path.join(staticPath, 'spill.html'));
});

app.get('/admin/',  (req, res) => {
    console.log('admin');
    res.sendFile(path.join(staticPath, 'admin', 'index.html')); // Ensure the correct path to the admin HTML file
});

app.get('/stein_saks_papir/',  (req, res) => {
    console.log('stein_saks_papir');
    res.redirect('/stein_saks_papir/ssp.html');
    //res.sendFile(path.join(staticPath, 'admin', 'index.html')); // Ensure the correct path to the admin HTML file
});

app.get('/kabal/',  (req, res) => {
    console.log('kabal');
    res.redirect('/kabal/kabal.html');
    //res.sendFile(path.join(staticPath, 'admin', 'index.html')); // Ensure the correct path to the admin HTML file
});

app.get('/getgames', async (req, res) => {
    console.log('/getgames/')

    const games = sqlm.getGames()
    console.log("games")
    res.send(games)
});





app.use(express.static(staticPath));
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000/');
})