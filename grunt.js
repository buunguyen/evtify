module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-jasmine-task');

    grunt.initConfig({
        jshint: {
            options: {
                browser: true
            }
        },
        lint: {
            all: ['lib/eventify.js']
        },
        min: {
            all: {
                src: ['lib/eventify.js'],
                dest: 'lib/eventify.min.js'
            }
        },
        jasmine: {
            all: {
                src: ['test/SpecRunner.html'],
                errorReporting: true,
                timeout: 1000
            }
        }
    });

    grunt.registerTask('default', 'lint jasmine min');
};