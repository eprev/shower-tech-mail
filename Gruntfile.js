module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		sass: {
			compile: {
				files: {
					'styles/screen.css': 'styles/screen.scss'
				}
			}
		},
		autoprefixer: {
			prefix: {
				src: 'styles/screen.css'
			}
		},
		csso: {
			minify: {
				files: {
					'styles/screen.css' : 'styles/screen.css'
				},
				options: {
					banner: '/**\n * Tech-Mail.ru theme for Shower HTML presentation engine\n * Copyright © 2010–<%= grunt.template.today("yyyy") %> Vadim Makeev, pepelsbey.net\n * Copyright © 2014 Anton Eprev, eprev.org\n * Licensed under MIT license\n */\n'
				}
			}
		},
		watch: {
			styles: {
				files: 'styles/*.scss',
				tasks: ['sass', 'autoprefixer', 'csso']
			}
		},
		bump: {
			options: {
				files: ['package.json', 'bower.json'],
				commitFiles: ['package.json', 'bower.json'],
				pushTo: 'origin'
			}
		}
	});

	grunt.registerTask('default', ['sass', 'autoprefixer', 'csso']);

};