var gutil = require('gulp-util');
var ext = gutil.replaceExtension;
var through = require('through2');

module.exports = function(filter) {
    return through.obj(function(file, encoding, callback) {
        if (file.isBuffer()) {
            file.path = ext(file.path, '.js');
            var contents = file.contents.toString();
            var comments = contents.match(/[^\S\r\n]*\/(?:\*{2})([\W\w]+?)\*\//gm);
            var filterComments = function (filter, comments){ 
              for (var i = comments.length - 1; i >= 0; i--) {
                if (comments[i].indexOf(filter) >= 0) {
                    comments.splice(i, 1);
                }
              }
              return comments;
            }

            if(comments) {
                if(filter){ 
                  if (typeof filter == "string") {
                    comments = filterComments(filter, comments);
                  } else if(typeof filter  == "array"){
                    filter.forEach(function(f){
                      comments = filterComments(f, comments);
                    });
                  }
                }
                contents = comments.join('\n\n');
            }
            else {
                contents = '';
            }
            file.contents = new Buffer(contents);

            // Only export non-empty files
            if (contents.trim().length > 0) {
                return callback(null, file);
            }
            else {
                callback();
            }
        }
        else {
            callback(null, file);
        }
    });
};