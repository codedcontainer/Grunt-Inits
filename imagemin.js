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
		 	}
	 	]
	 }
	}
});