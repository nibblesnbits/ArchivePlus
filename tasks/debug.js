module.exports = function(grunt) {
	grunt.registerTask('default', ['uglify:debug', 'less:debug', 'copy', 'clean:css']);
};