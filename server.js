#!/usr/bin/env node

import express from 'express'
import minimist from 'minimist'
import { rps, rpsls } from './lib/rpsls.js';

let argv = minimist(process.argv.slice(2));
const app = express();
const port = argv.port;