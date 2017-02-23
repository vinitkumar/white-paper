module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      dist: {
        src: [
          'css/base.css',
          'css/syntax/emacs.css',
          'css/octicons.css'
        ],
        dest: 'css/<%= pkg.name %>.add.css'
      }
    },
    
    cssmin: {
      'css/main.min.css': [
        '<%= concat.dist.dest %>'
      ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['concat', 'cssmin']);
  grunt.registerTask('css', ['concat', 'cssmin']);
};
