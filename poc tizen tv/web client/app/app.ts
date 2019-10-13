import express from 'express'
import path from 'path'
import http from 'http'
import ejs from 'ejs'

declare var __dirname: string;

class App {

    static main() {

        let app = express()
        let server = http.createServer(app)
        
        app.use(express.static(path.join(__dirname, 'public')))
        app.set('views', path.join(__dirname, 'public'))
        app.engine('html', () => ejs.renderFile)
        app.set('view engine', 'html')

        app.use('/', (req, res) => {
            res.render('index.html')
        })

        server.listen(8080)

    }
}

// Iniciando App
App.main()