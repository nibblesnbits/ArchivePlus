module.exports = {
	manifest: {
		files: [{
			expand: true,
			cwd: 'app',
			src: ['manifest.json'],
			dest: 'build',
    }]
	},
	img: {
		files: [{
			expand: true,
			cwd: 'app/img/',
			src: ['*'],
			dest: 'build/img',
    }]
	},
	//      libs: {
	//        files: [{
	//          expand: true,
	//          cwd: 'app/scripts/libs',
	//          src: ['*'],
	//          dest: 'build/js/libs',
	//    }]
	//      },
	js: {
		files: [{
			expand: true,
			cwd: 'app/scripts/',
			src: ['*.js', '!*.min.js'],
			dest: 'build/js/',
    }]
	}
};