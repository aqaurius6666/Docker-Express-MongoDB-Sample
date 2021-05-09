const globby = require('globby');
const Mongoose = require('mongoose')


module.exports.connect = (mongoUri) => new Promise((res, rej) => {
    Mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    Mongoose.connection.on('connected', () => {
        res('Mongo Database connected');
    });
    Mongoose.connection.on('disconnected', () => {
        console.log('Mongo Database disconected');
        process.exit(0);
    });
    const models = globby.sync('src/models/*.js');
    models.forEach((model) => {
        require(`../${model}`);
    });
})

module.exports.close = () => new Promise((resolve, reject) => {
    Mongoose.connection.close(() => {
        resolve();
    });
});

