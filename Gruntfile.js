module.exports = function(grunt) {
    
   var mozjpeg = require('imagemin-mozjpeg'); 
    
    
  grunt.initConfig({
    jshint: {
      files: [],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    
    concat: {
        options: {
          separator: ';'
        },
        js: {
                src: [
                      'bower_components/jquery/dist/jquery.js', 
                      'bower_components/bootstrap/dist/js/bootstrap.js', 
                      'bower_components/jQuery-One-Page-Nav/jquery.nav.js', 
                      'bower_components/jquery.scrollTo/dist/jquery.scrollTo.js',   
                      'bower_components/skrollr/dist/skrollr.js',              
                      'bower_components/jquery.easing/dist/jquery.easing.js', 
                      'bower_components/jquery-lwtcountdown/dist/jquery.lwtCountdown-1.0.min.js',  
                      'bower_components/parallax/jquery.parallax.js',
                      'src/conf/conf.js',
                      'src/js/function.js'
                      ],
                dest: 'src/js/tmp/built.js'
        } 
    }, 

    uglify: {
        js : {
            files: {
              'app/dist/js/javascripts.min.js': ['src/js/tmp/built.js'] ,
              'app/dist/js/html5shiv.js': ['bower_components/html5shiv/dist/html5shiv.js']  
            }
        } 
        
   } , 
    
    cssmin: {
      target: {
        files: [{
          src: [
                "bower_components/bootstrap/dist/css/bootstrap.css" ,
                "bower_components/font-awesome/css/font-awesome.css" ,
                "src/less/tmp/style.css"
               ],
          dest: 'app/dist/css/stylesheets.min.css',
        }]
      }
    }  ,   
   
    imagemin: {                          // Task
        dynamic: {                         // Another target
          files: [{
            expand: true,                  // Enable dynamic expansion
            cwd: 'src/images/',                   // Src matches are relative to this path
            src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
            dest: 'app/dist/images/'                  // Destination path prefix
          }]
        }
    } ,        

   less : {
       dist : {
           src : ['src/less/*.less'] ,
           dest : 'src/less/tmp/style.css'
       }
   } ,
      
    copy: {
      main: {
        files : [ { 
			expand: true,
			src: ['bower_components/font-awesome/fonts/*'],
			dest: 'app/dist/fonts/',
			flatten : true ,
			filter : 'isFile'
			} ]
      }
    },        
        
        
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    }
  });

  grunt.loadNpmTasks( 'grunt-contrib-jshint' );
  grunt.loadNpmTasks( 'grunt-contrib-watch' );
  grunt.loadNpmTasks( 'grunt-contrib-concat' );
  grunt.loadNpmTasks( 'grunt-contrib-uglify' );
  grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
  grunt.loadNpmTasks( 'grunt-contrib-imagemin' );
  grunt.loadNpmTasks( 'grunt-contrib-less' );
  grunt.loadNpmTasks( 'grunt-contrib-copy' );

  grunt.registerTask('init', ['default']);
  
  grunt.registerTask('default', ['concat', 'less' , 'cssmin' , 'copy' , 'uglify' , 'imagemin']);

};