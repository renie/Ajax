'use strict';

(function(root, ajax) {
	/*
	**	UMD BLOCK
	*/	
	if (typeof define === 'function' && define.amd) {
		// AMD
		define([], ajax);
	} else if (typeof exports === 'object') {
		// Node, CommonJS-like
		module.exports = ajax();
	} else {
		// Browser globals (root is window)
		root.Ajax = ajax();
	}
}(window, function() {

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

	Ajax.call = function(options) {
		var ajax = new Ajax.Methods(options);

		ajax.createRequest();

		ajax.bindEvents();

		ajax.req.send(ajax.opt.data);
	};

	Ajax.setup = function(options) {
		var opt = Ajax.Utils.extend(Ajax.Methods.prototype.defaultOptions, options);

		Ajax.Methods.prototype.defaultOptions = opt;
		Ajax.Methods.prototype.setupExecuted = true;
	};

	Ajax.Methods = function(options) {
		if (this.urlIsEmpty(options))
			throw new ReferenceError('URL is missing. It should be passed by parameter to Ajax.call method or setted on Ajax.setup.');

		this.opt = Ajax.Utils.extend(this.defaultOptions, options);

		return this;
	};

	Ajax.Methods.prototype.defaultOptions = {
		method		: 'GET',
		data		: null,
		success		: function(){},
		fail		: function(){},
		contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
		headers		: {},
		context		: window
	};

	Ajax.Methods.prototype.urlIsEmpty = function(options) {
		return ((!options.url && !this.setupExecuted) || (this.setupExecuted && !this.defaultOptions.url));
	};

	Ajax.Methods.prototype.bindEvents = function() {
		this.req.onload		= this.loadListener.bind(this);
		this.req.onerror	= this.errorListener.bind(this);
	};

	Ajax.Methods.prototype.createRequest = function() {
		this.req = new XMLHttpRequest();
		this.req.open(this.opt.method, this.opt.url, true);
		this.setHeaders();
	};

	Ajax.Methods.prototype.setHeaders = function() {
		this.opt.headers['Content-Type'] = this.opt.contentType;

		for (var header in this.opt.headers)
			this.req.setRequestHeader(header, this.opt.headers[header]);
	};

	Ajax.Methods.prototype.loadListener = function() {
		if (this.req.status >= 200 && this.req.status < 400) {
			var data;

			if (this.opt.dataType !== "text"){
				try{
					data = JSON.parse(this.req.responseText);
				}
				catch(e) {
					data = this.req.responseText;		
				}
			} else {
				data = this.req.responseText;
			}

			this.opt.success.call(this.opt.context, data);
		}
	};

	Ajax.Methods.prototype.errorListener = function() {
		this.opt.fail.call(this.opt.context, this.req);
	};

	return Ajax;

}));