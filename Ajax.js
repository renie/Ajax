'use strict';

function Ajax(options) {
	this.opt = {};

	if (!options.url)
		return false;

	this.opt.method		= options.method || 'GET';
	this.opt.complete	= options.complete || function(){};
	this.opt.fail		= options.fail || function(){};
	this.opt.url		= options.url;
}


// Methods
Ajax.prototype.bindEvents = function(opt) {
	if (opt.type === 'json') {
		this.req.onload		= this.onJsonLoad.bind(this);
		this.req.onerror	= this.onJsonError.bind(this);
	}
};

Ajax.prototype.createRequest = function() {
	this.req = new XMLHttpRequest();
	this.req.open(this.opt.method, this.opt.url, true);
};

Ajax.prototype.onJsonLoad = function() {
	if (this.req.status >= 200 && this.req.status < 400)
		this.opt.complete(JSON.parse(this.req.responseText));
};

Ajax.prototype.onJsonError = function() {
	this.opt.fail(this.req);
};

Ajax.prototype.getJSON = function() {
	this.createRequest();

	this.bindEvents({type: 'json'});

	this.req.send();
};