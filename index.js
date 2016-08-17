var gutil = require('gulp-util');
var ext = gutil.replaceExtension;

var through = require('through2');
module.exports = function(filter) {
    return through.obj(function(file, encoding, callback) {
        if (file.isBuffer()) {
            file.path = ext(file.path, '.js');
            var contents = file.contents.toString();
            var comments = contents.match(/[^\S\r\n]*\/(?:\*{2})([\W\w]+?)\*\//gm);
            if(comments) {
                if (filter) {
                    for (var i = comments.length - 1; i >= 0; i--) {
                        if (comments[i].indexOf(filter) >= 0) {
                            comments.splice(i, 1);
                        }
                    }
                }
                contents = comments.join('\n\n');
            }
            else {
                contents = '';
            }
            file.contents = new Buffer(contents);
        }
        callback(null, file);
    });
};