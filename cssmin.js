cssmin: {
		target:{
			files: [{
				expand: true,
				cwd: 'css/',
				src: ['*.css', '!*.min.css'],
				dest: 'css2/',
				ext: '.min.css'
			}]
		}
	}