#!/usr/bin/env node

'use strict';

const colors = require('colors/safe');

const argv = process.argv.slice(2);

if (argv.length === 0) {
	//
}

console.log('\n');

console.log(colors.cyan.bold('\t╦    ┬ ┬┌─┐┬  ┬┌─┐    ┌─┐    ┌┐ ┌─┐┬ ┬┌─┐┬─┐┬┌─┐┌┐┌┌┬┐'));

console.log(colors.green.bold('\t║    ├─┤├─┤└┐┌┘├┤     ├─┤    ├┴┐│ │└┬┘├┤ ├┬┘│├┤ │││ ││'));

console.log(colors.red.bold('\t╩    ┴ ┴┴ ┴ └┘ └─┘    ┴ ┴    └─┘└─┘ ┴ └  ┴└─┴└─┘┘└┘─┴┘'));

console.log('\n');
