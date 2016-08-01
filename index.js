// var through = require("through2");
// var gutil = require('gulp-util');
// var PluginError = gutil.PluginError;
// var ext = gutil.replaceExtension;

// function gulpBuilder(options) {
//     return through.obj(function (file, enc, cb) {
//         if (file.isNull()) {
//             cb(null, file);
//         }

//         file.path = ext(file.path, '.js');
//         if(file.isStream()){
//             return cb(new PluginError('jibo-comments', 'Streaming not supported'));
//         }

//         if (file.isBuffer()) {
//             var contents = file.contents.toString();


//             file.contents = new Buffer(contents);
//         }

//         cb(null, file);

//     });
// }


// module.exports = gulpBuilder;

var Foo = require('lib/jibo-comments').default;
var f = new Foo();