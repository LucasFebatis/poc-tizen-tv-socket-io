import express from 'express'
import http from 'http'
import socketIO from 'socket.io'

class App {

    static main() {

        let app = express()
        let server = http.createServer(app)
        let io = socketIO(server)

        let messages: any[] = []

        io.on('connection', socket => {
            console.log(`Socket conectado: ${socket.id}`)

            socket.emit('previousMessages', messages)

            socket.on('sendMessage', data => {
                messages.push(data)
                socket.broadcast.emit('receivedMessege', data) 
            })

        })

        server.listen(3000)

    }
}

// Iniciando App
App.main()