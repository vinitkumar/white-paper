module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      dist: {
        src: [
          'css/base.css',
          'css/syntax/emacs.css',
          'css/octicons.css',
          'css/font-awesome.min.css'
        ],
        dest: 'css/<%= pkg.name %>.add.css'
      }
    },

    cssmin: {
      'css/main.min.css': [
        '<%= concat.dist.dest %>'
      ],
      'css/main.min.rtl.css': [
        '<%= rtlcss.rtl.dest %>'
      ]
    },

    rtlcss: {
      rtl: {
        src: '<%= concat.dist.dest %>',
        dest: 'css/<%= pkg.name %>.add.rtl.css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-rtlcss');
  grunt.registerTask('default', ['concat', 'rtlcss', 'cssmin']);
  grunt.registerTask('css', ['concat', 'rtlcss', 'cssmin']);
};
