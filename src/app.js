
const express = require('express');
const db = require('./utils/database')
const cors = require('cors')

const {port} = require('./config');

const userRouter = require('./users/users.router')
const authRouter = require('./auth/auth.router')
const conversationsRouter = require('./conversations/conversations.router')
const messagesRouter = require('./messages/messages.router')
const participantsRouter = require('./participants/participants.router')
const initModels = require('./models/initModels')

const app = express()

app.use(express.json())
app.use(cors());
db.authenticate()
    .then(() => {
        console.log('Database Authenticated')
    })
    .catch(err => {
        console.log(err)
    })

// db.sync({ alter: true })
db.sync()
    .then(() => {
        console.log('Database Synced')
    })
    .catch(err => {
        console.log(err)
    })

initModels()


app.get('/',(req, res) => {
    res.status(200).json({
        message: 'OK!',
        users: `localhost:${port}/api/v1/chat`
    })
})

app.use('/api/v1/users', userRouter)
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/conversations', conversationsRouter)
app.use('/api/v1/messages', messagesRouter)
app.use('/api/v1/participants', participantsRouter)

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})

