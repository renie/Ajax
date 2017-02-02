var UglifyJS	= require('uglify-js'),
	FS			= require('fs'),
	result		= UglifyJS.minify('src/Ajax.js');


FS.writeFile("dist/Ajax.min.js", result.code, function(err) {
    if (err) return console.log(err);
    console.log("The file was saved!");
}); 