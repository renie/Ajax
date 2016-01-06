[![Code Climate](https://codeclimate.com/github/renie/Ajax/badges/gpa.svg)](https://codeclimate.com/github/renie/Ajax)

# Ajax

A tiny XMLHTTPRequest abstraction. In less than 2kb minified.

(Actually, by now, less than 2kb minified and a bit less than 900b minified and gzip).


## Why?

I just want to use jQuery Ajax like methods, but without loading ALL jQuery.


## Why not use XYZ lib?

Because I made no reasearch before building this :bowtie:.


## Include in your project

You can just download it from this repo. But I'd recommend you to use bower method:

```
bower install Ajax
```

You can also use npm:

```
npm install ajax-abstraction
```

Yeap, not same name. It was already taken on NPM. Life is not so beautiful =/


## How to use

If you know how to use jQuery Ajax methods, you know how to use this. See below:

```javascript
Ajax.call({
	url: '/foo',
	success: function(data) {
		// my success function
	}
});
```

This lib supports **UMD**. So, import this via **AMD**, **CommonJS** or importing min script in you HTML and using as **window global**.

It's possible to use **setup** method for setting default options. The same parameters can be passed. 

## Options

* contentType [string]: 
	* The content type of your request;
	* **default**: 'application/x-www-form-urlencoded; charset=UTF-8'.

* context [object]:
	* Context where your callbacks will be executed;
	* **default**: window

* data [string]:
	* Data that will be passed on body of the request.

* dataType [string]:
	* Format that your data will be returned;
	* **default**: JSON

* fail [function]:
	* Function that will be called if your function doesn't return code 200.

* headers [json]: 
	* Headers of your request. This must be an Javascript Object.

* method [string]:
	* HTTP method used on this request; 
	* **default**: 'GET'.

* success [function]:
	* Function that will be called if your function returns code 200.

## License

GPL 3 (full copy shipped with code)
