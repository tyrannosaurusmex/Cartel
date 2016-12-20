module.exports = function(grunt) {
        
    grunt.initConfig({
        // Compilation Tools
        sass: {
            default: {
                options: {
                    outputStyle: 'expanded'
                },
                files: {
                    'dist/public/css/app.css': 'src/public/scss/app.scss'
                }
            },
        },

        express: {
            options: {
                background: false,
                delay: 3
            },
            dev: {
                options: {
                    script: 'dist/server.js'
                }
            },
            prod: {
                options: {
                    script: 'dist/server.js',
                    node_env: 'prod'
                }
            }
        },

        copy: {
            main: {
                files: [
                    { expand: true, flatten: true, src: ['src/public/fonts/*'], dest: 'dist/public/fonts',  filter: 'isFile' },
                ]
            },
            images: {
                files: [
                    { expand: true, flatten: true, src: ['src/public/images/*'], dest: 'dist/public/images',  filter: 'isFile' },
                ]
            }
        },

        // Linting Tools
        scsslint: {
            allFiles: [
                'src/pulic/scss/**/*.scss'
            ],
            options: {
                colorizeOutput: true,
                config: '.scss-lint.yml'
            },
        },

        jshint: {
            app: [
                'Gruntfile.js', 
                'predist/js/**/*.js',
            ],
            options: {
                esversion: 6
            }
            
        },
    
        // Dev Tools
        watch: {
            options: {
                spawn: false,
            },
            scss: {
                files: [
                    'assets/scss/**/*.scss'
                ],
                tasks: [ 
                    'sass:', 
                    'postcss',
                    'sassdoc',
                    'notify:css'
                ],
            },
            express: {
                files: 'dist/server.js',
                tasks: ['express:'],
            },
            images: {
                files: 'assets/images/**/*',
                tasks: [
                    'clean:images',
                    'copy:images'
                ]
            },
            templates: {
                files: ['**/*.js'],
                tasks: ['express'],
                options: {
                    spawn: false
                }
            }
        },
    });
    
    // Load Packages
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-scss-lint');
    grunt.loadNpmTasks('grunt-contrib-copy');
    
    // Grunt Tasks
    grunt.registerTask('default', [
        'sass',
    ]);

    grunt.registerTask('public', [
        'copy'
    ]);

    grunt.registerTask('lint', [
        'jshint',
        'scsslint'
    ]);

    grunt.registerTask('run', [
        'express',
        'watch'
    ]);

};
