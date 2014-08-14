module.exports = {
	options: {
		nospawn: true,
	},
	resources: {
		files: ['app/**/*'],
		tasks: ['copy']
	},
	js: {
		files: ['app/scripts/**/*.js'],
		tasks: ['uglify:debug']
	},
	less: {
		files: ['app/styles/**/*.less'],
		tasks: ['less:debug']
	}
};