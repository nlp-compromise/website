//generates documentation for all nlp repositories
module.exports = function(grunt) {

  grunt.initConfig({
    docco: {
      debug: {
        src: ['./node_modules/nlp-core/src/**/*.js'],
        options: {
          output: 'docs/browse/'
        }
      }
    }
  })

}
grunt.loadNpmTasks('grunt-docco');

grunt.registerTask('docs', ['docco']);
grunt.registerTask('default', ['docco']);