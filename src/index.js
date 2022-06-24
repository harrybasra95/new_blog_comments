import 'dotenv/config'
import express from 'express'
import sequelize from './models'

const app = express()

// Parsing config for requests
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// EJS files config
app.set('view engine', 'ejs')
app.set('views', './src/views')
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.render('index')
})

sequelize
    .authenticate()
    .then(() => {
        console.log('Database connection successfully established')
        app.listen(3001, () => {
            console.log('listening on port 3000')
        })
    })
    .catch((err) => {
        console.log('Database connection error')
        console.log(err)
    })
