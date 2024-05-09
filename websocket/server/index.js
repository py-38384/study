import express from 'express'
import http from 'http'
import path from 'path'
import { Server } from 'socket.io'

const app = express()
const server = http.createServer(app)
const io = new Server(server)

io.on("connection", (socket) => {
    console.log('A new user has connected', socket.id)
    socket.on('message', (res) => {
        const msgObj = JSON.parse(res)
        const message = {
            user: msgObj.user,
            message: msgObj.message
        }
        io.emit('message', JSON.stringify(message))
    })
})

app.use(express.static(path.resolve('./public')))
app.get('/', (req, res) => {
    return res.sendFile('/public/index.html')
})

server.listen(8000, () => console.log(`Server started at http://localhost:8000`))