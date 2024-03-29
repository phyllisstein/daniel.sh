#!/usr/bin/env node

/* eslint-disable */

const { createServer } = require('http')
const next = require('next')

const {
  HOSTNAME = '0.0.0.0',
  NODE_ENV = 'development',
  PORT = '3000',
} = process.env

const dev = NODE_ENV === 'development'
const portNumber = Number.parseInt(PORT, 10)

const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    return handle(req, res)
  }).listen({
    port: portNumber,
    hostname: HOSTNAME,
  }, err => {
    if (err) throw err
  })
})
