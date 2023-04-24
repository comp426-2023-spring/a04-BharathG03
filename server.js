#!/usr/bin/env node

import express from 'express'
import minimist from 'minimist'
import { rps, rpsls } from './lib/rpsls.js';

let argv = minimist(process.argv.slice(2));
const app = express();
const port = argv.port || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/app', (req, res) => {
    res.status(200).send('200 OK');
});

app.get('/app/rps', (req, res) => {
    res.status(200).send(rps());
});

app.get('/app/rpsls', (req, res) => {
    res.status(200).send(rpsls());
});

app.get('/app/rps/play', (req, res) => {
    res.status(200).send(rps(req.query.shot));
});

app.get('/app/rpsls/play', (req, res) => {
    res.status(200).send(rpsls(req.query.shot));
});

app.post('/app/rps/play', (req, res) => {
    res.status(200).send(rps(req.body.shot));
});

app.post('/app/rpsls/play', (req, res) => {
    res.status(200).send(rpsls(req.body.shot));
});

app.get('*', (req, res) => {
    res.status(404).send('404 NOT FOUND');
});

app.listen(port);