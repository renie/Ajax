'use strict';

var Ajax = {};

Ajax.getJSON = function(options) {

	var ajax = new Ajax.Methods(options);

	ajax.createRequest();

	ajax.bindEvents({type: 'json'});

	ajax.req.send();
};

Ajax.Methods = function(options) {
	this.opt = {};

	if (!options.url)
		return false;

	this.opt.method		= options.method || 'GET';
	this.opt.complete	= options.complete || function(){};
	this.opt.fail		= options.fail || function(){};
	this.opt.url		= options.url;

	return this;
}

Ajax.Methods.prototype.bindEvents = function(opt) {
	if (opt.type === 'json') {
		this.req.onload		= this.onJsonLoad.bind(this);
		this.req.onerror	= this.onJsonError.bind(this);
	}
};

Ajax.Methods.prototype.createRequest = function() {
	this.req = new XMLHttpRequest();
	this.req.open(this.opt.method, this.opt.url, true);
};

Ajax.Methods.prototype.onJsonLoad = function() {
	if (this.req.status >= 200 && this.req.status < 400)
		this.opt.complete(JSON.parse(this.req.responseText), this.req);
};

Ajax.Methods.prototype.onJsonError = function() {
	this.opt.fail(this.req);
};