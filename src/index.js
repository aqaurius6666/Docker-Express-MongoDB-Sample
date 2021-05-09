const { PORT, APP_NAME } = process.env
const app = require('express')()
const server = require('http').Server(app)
const api = require("./api")
const { connect } = require('./database')
const { MONGODB_PORT, MONGODB_DATABASE} = process.env

const MONGO_URI = `mongodb://mongo:${MONGODB_PORT}/${MONGODB_DATABASE}`
const initApp = async () => {
    const initDb = async () => {
        return connect(MONGO_URI)
    }
    const initApi = async () => {
        app.use('/', api)
        return
    }
    return Promise.all([initDb(), initApi()])
}

initApp().then(() => {
    server.listen(PORT, (err) => {
        if (err) {
            console.log(err)
            process.exit(1)
        }
        console.log(`${APP_NAME} is running on port ${PORT}`)
    })
})
