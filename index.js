const express = require ('express')
const cors = require('cors');
const app = express()

app.use(cors())
/*app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://fitness-companion.netlify.app"); // update to match the domain you will make the request frommm
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    console.log('dans le middleware cors')
    next();
});*/
//app.use(cors({origin: ['http://localhost:5000', 'http://localhost:3000', 'https://fitness-companion.netlify.app']}));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'https://fitness-companion.netlify.app');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    }),
);



// Routes Users
app.use('/api/v1/user', require('./router/users'))

app.use('/api/v1/user', require('./router/userCreate'))

app.use('/api/v1', require('./router/userLogin'))

// Routes Workouts
app.use('/api/v1', require('./router/workouts'))

app.get('/', function (req, res) {
    res.send('Hello World!');
    console.log('route depart')
});


const port = 8000

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
