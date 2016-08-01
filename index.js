var gutil = require('gulp-util');
var ext = gutil.replaceExtension;

var through = require('through2');
module.exports = function() {
    return through.obj(function(file, encoding, callback) {
        if (file.isBuffer()) {
            file.path = ext(file.path, '.js');
            var contents = file.contents.toString();
            var comments = contents.match(/(( )*\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\/)/gm);
            if(comments) {
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