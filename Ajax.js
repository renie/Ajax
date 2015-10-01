'use strict';

var Ajax = {};

Ajax.Utils = {
	extend : function() {
		var extended = {}, argument;

		for(var key in arguments) {
			argument = arguments[key];
			for (var prop in argument)
				if (Object.prototype.hasOwnProperty.call(argument, prop))
					extended[prop] = argument[prop];
		}

		return extended;
	}
};

Ajax.getJSON = function(options) {

	var ajax = new Ajax.Methods(options);

	ajax.createRequest();

	ajax.bindEvents({type: 'json'});

	ajax.req.send();
};

Ajax.Methods = function(options) {
	if (!options.url)
		return false;

	this.opt = Ajax.Utils.extend(this.defaultOptions, options);

	return this;
};

Ajax.Methods.prototype.defaultOptions = {
	method		: 'GET',
	complete	: function(){},
	fail		: function(){}
};

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
		this.opt.complete(JSON.parse(this.req.responseText));
};

Ajax.Methods.prototype.onJsonError = function() {
	this.opt.fail(this.req);
};