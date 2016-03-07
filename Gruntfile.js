module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less:{
    development:{
      options:{
        paths:['css']
      },
      files:{
          'css/style.css':'less/*.less'
        }

    }

    },
    watch:{
      files:['less/*.less'],
      tasks: ['less'],
    }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['less']);

};