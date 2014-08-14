'use strict';

var fs = require('fs');
var path = require('path');
module.exports = function (grunt) {
	return {
		readJsonFile: function (filePath, callback) {
			var file = path.resolve(filePath);
			var jsonData;
			fs.readFile(file, 'utf8', function (err, data) {
				if (err) {
					grunt.log.writeln('Error reading file: ' + err);
					return;
				}
				
				jsonData = callback(JSON.parse(data));
			});
		},

		writeJsonFile: function (filePath, data, callback) {
			var json = JSON.stringify(data);

			fs.writeFile(path.resolve(filePath), JSON.stringify(json), "utf8", callback);
		}
	}
};