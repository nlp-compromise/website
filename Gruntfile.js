//generates documentation for all nlp repositories
module.exports = function(grunt) {

  grunt.initConfig({

    watch: {
      files: ['./home.jsx', './*/*.jsx', '!./build'],
      tasks: ['run:buildDemo']
    },

    run: {
      buildDemo: {
        exec: 'browserify ./home.jsx -o ./build/demo.es5.js -t [ babelify --presets [ react es2015 ] ]'
      }
    },

    docco: {
      debug: {
        src: ['../nlp_compromise/src/**/*.js'],
        options: {
          output: './browse/'
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-docco');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-run');
  grunt.registerTask('docs', ['docco']);
  grunt.registerTask('build', ['run:buildDemo']);
  grunt.registerTask('default', ['watch']);
};
