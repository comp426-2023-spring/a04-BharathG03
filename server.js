#!/usr/bin/env node

import express from 'express'
import minimist from 'minimist'
import { rps, rpsls } from './lib/rpsls.js';

let argv = minimist(process.argv.slice(2));
const app = express();
const port = argv.port;

app.use.json();
app.use(express.urlencoded({ extended: true }));

app.get('/app', (req, res) => {
    res.status(200).send('200 OK');
});