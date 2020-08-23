const express = require ('express')
const cors = require('cors');
const app = express()

app.use(express.json());
app.use(cors());
app.use(
    express.urlencoded({
        extended: true,
    }),
);

// Routes Users
app.use('/api/v1/users', require('./router/users'))

app.use('/api/v1/users', require('./router/userCreate'))

app.use('/api/v1/users', require('./router/userLogin'))

// Routes Workouts
app.use('/api/v1', require('./router/workouts'))

// Routes Exercises



const port = 8000

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
