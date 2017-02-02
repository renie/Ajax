var exec	= require('child_process').exec,
	cmd		= 'rm -rf dist && mkdir dist && chmod +x scripts/* && npm run minify';

exec(cmd);