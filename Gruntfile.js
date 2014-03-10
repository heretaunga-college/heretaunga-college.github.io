module.exports = function(grunt) {
 
  grunt.registerTask('watch', [ 'watch' ]);
 
  grunt.initConfig({
    
    sass: {
      style: {
        files: {
          "css/screen.css": "sass/screen.sass"
        }
      }
    },
    watch: {
      css: {
        files: ['sass/*.sass', 'css/*.css'],
        options: {
          livereload: true,
        }
      }
    }
  });
 
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
 
};
