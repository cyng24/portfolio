'use strict'
const api = require('express').Router()

api.get('/hello', (req, res) => res.send({hello: 'world'}))

api.use((req, res, next) => {
	res.status(404).send('Not found');
  });

module.exports = api