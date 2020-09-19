const express = require ('express')
const cors = require('cors');
const app = express()



app.use(express.json());
//app.use(cors())
app.use(cors({
    origin: 'http://localhost:3000'
}));
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
