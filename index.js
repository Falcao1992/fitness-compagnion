const express = require ('express')
const cors = require('cors');
const app = express()



app.use(express.json());
//app.use(cors())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://fitness-companion.netlify.app"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
//app.use(cors({origin: ['http://localhost:5000', 'http://localhost:3000', 'https://fitness-companion.netlify.app']}));
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


const port = 8000

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
