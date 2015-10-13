module.exports = function(grunt) {
	'use strict';
	
	//Force fallback on async module
	global.setImmediate = undefined;
	
	grunt.initConfig({
		browserify: {
			dist: {
				files: {
					'bundle.js': ['app.js']
				},
				options: {
					plugin: [['parcelify', {o:'bundle.css'}]]
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-browserify');
	grunt.registerTask('default', ['browserify']);
}
