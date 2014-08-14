module.exports = function (grunt) {
	grunt.registerMultiTask('updatePackage', 'Update package.json with manifest.json version number.', function () {
		grunt.log.writeln('Loaded dependencies...');
		var path = require('path');
		var utils = require('./gruntutils.js')(grunt);
		grunt.log.ok();

		var done = this.async();

		var options = this.options({
			package: 'package.json',
			manifest: 'app/manifest.json'
		});

		if (!grunt.file.exists(options.manifest)) {
			grunt.log.error('No manifest file exists at ' + path.resolve(options.manifest));
		}
		if (!grunt.file.exists(options.package)) {
			grunt.log.error('No package file exists at ' + path.resolve(options.package));
		}

		var package = grunt.file.readJSON(options.package);
		var manifest = grunt.file.readJSON(options.manifest);
		if (package.version !== manifest.version) {
			package.version = manifest.version;
			grunt.file.write(options.package, JSON.stringify(package));
			grunt.log.ok("Updated package to version " + package.version);
		} else {
			grunt.log.writeln('Package is already up to date!');
		}
		done();
	});

	grunt.registerTask('build', ['updatePackage', 'clean:all', 'uglify:build', 'less:build', 'copy', 'clean:css', 'clean:js', 'compress']);
};