#!/usr/bin/env node
const fs = require('fs');
const base64 = require('../src/main.js');
const input = fs.readFileSync('/dev/stdin', 'utf8');
base64.decode(input)