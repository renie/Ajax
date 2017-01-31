var aj = require('../dist/Ajax.min.js');

aj.call({
	url: 'test.json',
	success: function(data) {
		console.log(data);
	}
});