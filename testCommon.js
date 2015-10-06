var aj = require('Ajax');

aj.call({
	url: '/test.json',
	success: function(data) {
		console.log(data);
	}
});