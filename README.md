# Ajax

A tiny XMLHTTPRequest abstraction.

## Why?

I just want to use jQuery Ajax like methods, but without loading ALL jQuery.


## Why not use XYZ lib?

Because I made no reasearch before building this :bowtie:.


## Include in your project

You can just download it from this repo. But I'd recommend you to use bower method:

```
bower install Ajax
```

## How to use

If you know how to use jQuery Ajax methods, you know how to use this. See below:

```
Ajax.call({
	url: '/foo',
	success: function(data) {
		// my success function
	}
});
```

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