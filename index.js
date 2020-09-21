const express = require ('express')
const cors = require('cors');
const app = express()

app.use(cors({credentials: true, origin: 'https://fitness-companion.netlify.app'}));
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    }),
);

// Routes Users
app.use('/user', require('./router/users'))

app.use('/user', require('./router/userCreate'))

app.use('/', require('./router/userLogin'))

// Routes Workouts
app.use('/', require('./router/workouts'))

app.get('/', function (req, res) {
    res.send('Hello World!');
    console.log('route depart')
});


const port = 8000

app.listen(process.env.PORT || 8000, () => {
    console.log(`Listening on port ${port}`)
})
