module.exports = function(grunt) {

grunt.initConfig(
{
	imagemin: {
		static:{
			options: {
				optimizationLevel: 3
			}
		},
		dynamic:{
	 	files:[
		 	{
		 		expand: true,
		 		cwd: 'images/',
		   		src: ['**/*.{png,jpg,gif}'],
		    	dest: 'images2/'
		 	},
		 	{
		 		expand: true,
		 		cwd: 'img/',
		 		src: ['**/*.{png,jpg,gif}'],
		    	dest: 'images2/'
		    }
	 	]
	 }
	},
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
});

grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.loadNpmTasks('grunt-contrib-cssmin');


};