const express = require('express');

const app = express();

app.use(express.json())

const connect = require('./config/db');

const cors = require('cors');
app.use(cors());

const { login , register} = require('./controllers/user.controller');

app.post('/login' , login);
app.post('/register' , register);

const vehiclesController = require('./controllers/vehicle.controller');
app.use('/vehicles' , vehiclesController);

const tripsController = require('./controllers/trip.controller');
app.use('/trips' , tripsController)

app.listen(2345 , async()=> {
    await connect();
    console.log('listening on port 2345')
})