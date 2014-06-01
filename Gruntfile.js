module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        // define a string to put between each file in the concatenated output
        separator: ';'
      },
      js: {
        // the files to concatenate
        src: ['js/*.js'],
        // the location of the resulting JS file
        dest: 'dist/<%= pkg.name %>.js'
      },
      css: {
        // the files to concatenate
        src: ['css/*.css'],
        // the location of the resulting JS file
        dest: 'dist/<%= pkg.name %>.css'
      }
    },
    cssmin: {
      combine: {
        files: {
          'dist/<%= pkg.name %>.min.css': ['<%= concat.css.dest %>']
        }
      }
    },
    uglify: {
      options: {
        // the banner is inserted at the top of the output
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= concat.js.dest %>']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('build', ['concat', 'uglify', 'cssmin']);
};