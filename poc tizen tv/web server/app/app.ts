import express from 'express'
import http from 'http'
import socketIO from 'socket.io'
import path from 'path'
import ejs from 'ejs'

var port = process.env.PORT || 3000;

class App {

    static main() {

        let app = express()
        let server = http.createServer(app)
        let io = socketIO(server)

        let messages: any[] = []

        app.use(express.static(path.join(__dirname, 'public')))
        app.set('views', path.join(__dirname, 'public'))
        app.engine('html', () => ejs.renderFile)
        app.set('view engine', 'html')

        app.use('/', (req, res) => {
            res.render('index.html')
        })

        io.on('connection', socket => {
            console.log(`Socket conectado: ${socket.id}`)

            socket.emit('previousMessages', messages)

            socket.on('sendMessage', data => {
                messages.push(data)
                socket.broadcast.emit('receivedMessege', data) 
            })

        })

        server.listen(port)

    }
}

// Iniciando App
App.main()