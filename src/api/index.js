const api = require('express').Router()
const globby = require('globby')
const path = require('path')


const apis = globby.sync('./src/api/*/*.controller.js')
apis.map(t => api.use(require(path.resolve(t))))


module.exports = api