import express from 'express'

const app = express()

// Parser config for POST requests
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(3000, () => {
    console.log('listening on port 3000')
})
