#!/usr/bin/node

var exec	= require('child_process').exec,
	cmd		= 'rm -rf dist && mkdir dist && npm run minify';

exec(cmd);