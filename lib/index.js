#! /usr/bin/env node
import fetch from 'node-fetch';
import fs from 'fs';
import minimist from 'minimist';

const pkg = JSON.parse(fs.readFileSync("./../package.json", 'utf-8'));
const argv = minimist(process.argv.slice(2));
const command = argv._[0];

